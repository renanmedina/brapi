import { FC } from 'react';

const MainLegal: FC = (props) => {
  return (
    <section className="text-white bg-gray-900 body-font max-w-screen">
      <div className="container mx-auto flex flex-col px-5 py-0 md:py-24 text-left prose lg:prose-xl prose-invert prose-headings:text-white prose-a:text-white prose-strong:text-white prose-li:marker:text-white text-white">
        {props.children}
      </div>
    </section>
  );
};

export default MainLegal;
