import htmlContent from './index.html';

const Component: React.FC = () => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Component;
