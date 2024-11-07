const Aboutmeinfocard = ({ iconUrl, text }) => {
  return (
    <div className="w-16 h-16 bg-purple-700 flex items-center justify-center rounded-md mb-2">
      <img src={iconUrl} className="w-8 h-auto" />
    </div>
  );
};

export default Aboutmeinfocard;
