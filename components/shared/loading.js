
class Loading extends React.Component {

  constructor(props) {
    super(props);
    this.overlayRef = React.createRef();
    this.hide = this.hide.bind(this)
  }

  hide(show) {
    if(show) {
      this.overlayRef.current.style.display = "block";
    }else{
      this.overlayRef.current.style.display = "none";
    }
  }

  render() {
    let hide = () => this.hide(false)
    if(this.props.noInterruption) {
      hide = null
    }
    return (
      <div>
        <div ref={this.overlayRef} id="overlay" onClick={hide}>
          <div id="container">
            <img src="https://media.giphy.com/media/LLd6Ma5vQtXyw/giphy.gif" />
          </div>
        </div>

         <style jsx>{`
            #overlay {
              position: fixed;
              display: ${this.props.show ?('block'):('none')};
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: rgba(196, 196, 196, 0.3);
              z-index: 100;
            }
            #container{
              position: absolute;
              top: 52%;
              left: 50.5%;
              font-size: 50px;
              color: white;
              transform: translate(-50%,-50%);
              -ms-transform: translate(-50%,-50%);
            }
         `}</style>
      </div>
    );
  }
}

export default Loading;