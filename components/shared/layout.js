import Head from '../head'

const layoutStyle = {
  width: '100vw',
  height: '100vh',
  margin: 0,
  padding: 0,
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <div className='container'>
      <h3>Twitter Feed</h3>
      {props.children}
    </div>
    <style jsx global>{`
      body {
        font-family: 'Helvetica Neue', 'Montserrat', Helvetica, sans-serif;
        background: #e6ecf0;
      }
      a:hover {
        text-decoration: none;
      }
      .container {
        margin: auto;
        width: 60%;
        text-align: center;
      }
    `}</style>
  </div>
)

export default Layout