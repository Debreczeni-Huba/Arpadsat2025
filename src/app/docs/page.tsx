import htmlContent from '/docs.html';

const Component: React.FC = () => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Component;
