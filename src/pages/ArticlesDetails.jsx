  import Details from "../componenets/Details";
import Navbar from "../componenets/Navbar";
import RelatedNews from "../componenets/RelatedNews";
import Sidebar from "../componenets/Sidebar";

const ArticlesDetails = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />

      <div className="flex gap-[3em] bg-[#eaeaea] pl-3 relative top-[80px]">
        {/* Sidebar */}
          <Sidebar />

        {/* Main Detail Content */}
        <Details />

        {/* Related news */}
        <RelatedNews />
      </div>
    </>
  );
};

export default ArticlesDetails;
