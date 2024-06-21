import * as zod from "zod";
import { useState } from "react";
import { gql } from "@apollo/client";
import { FileDownIcon, MailCheckIcon } from "lucide-react";
import { DialogTrigger } from "react-aria-components";
import { DateFormatter, getLocalTimeZone } from "@internationalized/date";
import { toast } from "react-toastify";

import { useAccountsQuery, useAccountsMutation } from "@/hooks/useAccounts";
import { Modal } from "@/ui/Modal";
import { Dialog, Heading } from "@/ui/Dialog";
import { Button } from "@/ui/Button";
import { Form } from "@/ui/Form";
import { TextField } from "@/ui/TextField";

const CURRENT_ACCOUNT_QUERY = gql`
  query CurrentAccount {
    currentAccount {
      id
      email
    }
  }
`;

const SEND_REPORT_MUTATION = gql`
  mutation SendReport(
    $businessId: GID!
    $locationId: GID
    $startDate: ISO8601Date!
    $endDate: ISO8601Date!
    $emailAddresses: [String!]!
  ) {
    sendCustomerReport(input: {
    businessId: $businessId,
    locationId: $locationId,
    startDate: $startDate,
    endDate: $endDate,
    emailAddresses: $emailAddresses,
  }) {
    id
  }
}`;

const emailAddressesValidator = zod
  .string()
  .transform((value) => value.split(",").map((email) => email.trim()))
  .pipe(zod.string().email().array());

export function ExportButton({ business, location, dateRange }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data } = useAccountsQuery(CURRENT_ACCOUNT_QUERY);
  const [sendReport] = useAccountsMutation(SEND_REPORT_MUTATION);

  const defaultEmailAddresses = data?.currentAccount?.email;

  const onSubmit = async (e) => {
    setIsSubmitting(true);

    e.preventDefault();

    const emailAddresses = new FormData(e.target)
      .get("emailAddresses")
      .split(",")
      .map((email) => email.trim());

    const promise = sendReport({
      variables: {
        businessId: business.id,
        locationId: location?.id,
        startDate: dateRange.start.toString(),
        endDate: dateRange.end.toString(),
        emailAddresses,
      },
    });

    await toast.promise(
      promise,
      {
        pending: "Requesting report...",
        success:
          "Report requested successfully, it should be in your inbox soon.",
        error: "Failed to request report. Please try again.",
      },
      { position: "bottom-right" },
    );

    setIsSubmitting(false);
  };

  return (
    <DialogTrigger>
      <Button Icon={FileDownIcon}>Export</Button>
      <Modal UNSTABLE_portalContainer={document.getElementById("sfs-portal")}>
        <Dialog>
          {({ close }) => (
            <div className="flex flex-col gap-4">
              <Heading slot="title">Export Report</Heading>

              <div className="flex flex-col gap-1 text-slate-600 text-sm font-medium">
                <p>
                  {business.name} {location && ` - ${location.name}`}
                </p>
                <p>
                  {new DateFormatter("en-US").formatRange(
                    dateRange.start.toDate(getLocalTimeZone()),
                    dateRange.end.toDate(getLocalTimeZone()),
                  )}
                </p>
              </div>

              <Form
                onSubmit={(e) => {
                  onSubmit(e);
                  close();
                }}
              >
                <p className="text-slate-600 text-sm">
                  Type in the email addresses you would like to send the report
                  to.
                </p>

                <TextField
                  label="Email Addresses"
                  description="Separate multiple email addresses with a comma"
                  name="emailAddresses"
                  isRequired
                  defaultValue={defaultEmailAddresses}
                  validate={(value) => {
                    const { success } =
                      emailAddressesValidator.safeParse(value);

                    if (!success) return "Invalid email addresses";
                  }}
                />

                <div className="flex flex-row gap-4 justify-end items-center">
                  <Button variant="secondary" onClick={close}>
                    Cancel
                  </Button>

                  <Button
                    Icon={MailCheckIcon}
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Send
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
