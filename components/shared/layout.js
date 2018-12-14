import Head from '../head'

const Layout = (props) => (
  <div>
    <div className='layout'>
      <div className='container'>
        <div className='title'>
          <h1>Twitter Feed</h1>
          <img src='http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png' />
        </div>
        {props.children}
      </div>
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
      img {
        object-fit: cover;
        width: 64px;
        height: 64px;
      }
      .layout {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
        height: 100vh;
      }
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 2.5% auto;
        padding: 2.5% 0;
        height: auto;
        min-height: 50vh;
        width: auto;
        min-width: 50vw;
        text-align: center;
        background: white;
      }
      .title {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0 2.5%;
      }
      .title img {
        margin: 1% 0 0 0;
      }
      @media screen and (max-width: 600px) {
        .container {
          width: 90vw;
        }
      }
    `}</style>
  </div>
)

export default Layout