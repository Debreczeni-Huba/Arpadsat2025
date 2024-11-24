import htmlContent from '/calendar.html';

const Component: React.FC = () => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Component;
