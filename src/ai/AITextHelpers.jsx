import {
  BookAIcon,
  CircleMinusIcon,
  CirclePlusIcon,
  EllipsisIcon,
  FeatherIcon,
  FileTextIcon,
  HeartHandshakeIcon,
  LanguagesIcon,
  LaughIcon,
  ListIcon,
  ReplyIcon,
  SmilePlusIcon,
  SpellCheckIcon,
  StarIcon,
  WandSparklesIcon,
} from "lucide-react";

import { MiniApp, Screen } from "@/ui/MiniApp";
import GenerateText from "./GenerateText";
import GenerateCaption from "./GenerateCaption";
import Translate from "./Translate";
import SpellCheck from "./SpellCheck";
import Summarize from "./Summarize";
import ImproveWriting from "./ImproveWriting";
import MakeLonger from "./MakeLonger";
import MakeShorter from "./MakeShorter";
import MakeMoreFormal from "./MakeMoreFormal";
import MakeMoreCasual from "./MakeMoreCasual";
import MakeFriendlier from "./MakeFriendlier";
import MakeFunnier from "./MakeFunnier";
import ContinueWriting from "./ContinueWriting";
import GenerateReviewReply from "./GenerateReviewReply";
import GenerateCommentReply from "./GenerateCommentReply";

const SCREENS = [
  {
    name: "GenerateText",
    title: "Generate Text",
    Icon: FileTextIcon,
    component: GenerateText,
  },
  {
    name: "GenerateCaption",
    title: "Generate Caption",
    Icon: FileTextIcon,
    component: GenerateCaption,
  },
  {
    name: "GenerateReviewReply",
    title: "Generate Reply",
    Icon: StarIcon,
    component: GenerateReviewReply,
  },
  {
    name: "GenerateCommentReply",
    title: "Generate Reply",
    Icon: ReplyIcon,
    component: GenerateCommentReply,
  },
  {
    name: "Translate",
    title: "Translate",
    Icon: LanguagesIcon,
    component: Translate,
  },
  {
    name: "SpellCheck",
    title: "Fix Spelling & Grammar",
    Icon: SpellCheckIcon,
    component: SpellCheck,
  },
  {
    name: "Summarize",
    title: "Summarize",
    Icon: ListIcon,
    component: Summarize,
  },
  {
    name: "ImproveWriting",
    title: "Improve Writing",
    Icon: FeatherIcon,
    component: ImproveWriting,
  },
  {
    name: "MakeLonger",
    title: "Make Longer",
    Icon: CirclePlusIcon,
    component: MakeLonger,
  },
  {
    name: "MakeShorter",
    title: "Make Shorter",
    Icon: CircleMinusIcon,
    component: MakeShorter,
  },
  {
    name: "MakeMoreFormal",
    title: "Make More Formal",
    Icon: BookAIcon,
    component: MakeMoreFormal,
  },
  {
    name: "MakeMoreCasual",
    title: "Make More Casual",
    Icon: SmilePlusIcon,
    component: MakeMoreCasual,
  },
  {
    name: "MakeFriendlier",
    title: "Make Friendlier",
    Icon: HeartHandshakeIcon,
    component: MakeFriendlier,
  },
  {
    name: "MakeFunnier",
    title: "Make Funnier",
    Icon: LaughIcon,
    component: MakeFunnier,
  },
  {
    name: "ContinueWriting",
    title: "Continue Writing",
    Icon: EllipsisIcon,
    component: ContinueWriting,
  },
];

const TOOLS = SCREENS.map((screen) => screen.name);

function AITextHelpers({
  message,
  text,
  onOptionSelected,
  onCloseButtonClick,
  tools,
}) {
  tools ??= TOOLS;

  const screens = SCREENS.filter((screen) => tools.includes(screen.name)).map(
    (screen) => (
      <Screen key={screen.name} title={screen.title} Icon={screen.Icon}>
        <screen.component
          message={message}
          text={text}
          onOptionSelected={onOptionSelected}
        />
      </Screen>
    ),
  );

  return (
    <MiniApp
      title="AI Helpers"
      Icon={WandSparklesIcon}
      onCloseButtonClick={onCloseButtonClick}
    >
      {screens}
    </MiniApp>
  );
}

export { AITextHelpers };
