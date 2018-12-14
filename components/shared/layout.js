import Head from '../head'

const layoutStyle = {
  width: '100vw',
  height: '100%'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <div className='container'>
      <h1>Twitter Feed</h1>
      {props.children}
    </div>
    <style jsx global>{`
      body {
        font-family: 'Helvetica Neue', 'Montserrat', Helvetica, sans-serif;
        font-color: #14171a;
        background: #e1e8ed;
      }
      a:hover {
        text-decoration: none;
      }
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        padding: 2.5% 0;
        height: 88vh;
        width: 50%;
        text-align: center;
        background: #f5f8fa;
      }
    `}</style>
  </div>
)

export default Layout