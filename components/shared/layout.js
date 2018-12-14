import Head from '../head'

const layoutStyle = {
  width: '100vw',
  height: '100%'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <div className='container'>
      <div className='title'>
        <h1>Twitter Feed</h1>
        <img src='http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png' />
      </div>
      {props.children}
    </div>
    <style jsx global>{`
      body {
        font-family: 'Helvetica Neue', 'Montserrat', Helvetica, sans-serif;
        font-color: #14171a;
        background: #e1e8ed;
      }
      ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
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
        background: white;
      }
      .title {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .title img {
        margin: 1% 0 0 0;
      }
      img {
        object-fit: cover;
        width: 64px;
        height: 64px;
      }
      @media screen and (max-width: 600px) {
        .container {
          width: 90%;

        }
      }
    `}</style>
  </div>
)

export default Layout