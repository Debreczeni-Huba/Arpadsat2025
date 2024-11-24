import htmlContent from '/about.html';

const Component: React.FC = () => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Component;
