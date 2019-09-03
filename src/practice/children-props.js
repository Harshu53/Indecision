const rootElement = document.getElementById("root");

const Layout = props => {
  return (
    <div>
      <p>THis is Header</p>
      <p>{props.children}</p>
      <p>THis is Footer</p>
    </div>
  );
};

const middle = (
  <div>
    <p>THis is middle content</p>
  </div>
);

ReactDOM.render(
  <Layout>
    <div>
      <p>THis is middle content new</p>
    </div>
  </Layout>,
  rootElement
);
