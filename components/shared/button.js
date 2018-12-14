class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.action} className={`button ${this.props.type}`}>
          {this.props.title}
        </button>
        <style jsx>{`
          .button {
            padding: 16px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
            cursor: pointer;
          }
          .button1 {
            background-color: #00aced;
            color: #e6ecf0;
            border: 2px solid #00aced;
          }
          .button1:hover {
            background-color: white;
            color: #14171a;
          }
          .button2 {
            background-color: #aab8c2;
            color: white;
            border: 2px solid #aab8c2;
          }
          .button2:hover {
            background-color: white;
            color: #14171a;
          }
        `}</style>
      </div>
    );
  }
}

export default Button;