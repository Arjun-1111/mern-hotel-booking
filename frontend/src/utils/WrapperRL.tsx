type Props = {
  children: React.ReactNode;
};

const WrapperRL = ({ children }: Props) => {
  return <div className=" mx-auto w-full md:w-7/12">{children}</div>;
};
export default WrapperRL;
