import Header from "./Header";

function Screen({ title, Icon, noBack, children }) {
  return (
    <>
      <Header title={title} Icon={Icon} noBack={noBack} />

      <main className="h-full grow w-full overflow-y-auto">{children}</main>
    </>
  );
}

export default Screen;
