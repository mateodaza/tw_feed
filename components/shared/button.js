class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="button button2">{this.props.title}</button>
        <style jsx>{`
          .button {
            background-color: #008CBA;
            color: #e6ecf0;
            border: 2px solid #008CBA;
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
          .button:hover {
            background-color: #e6ecf0;
            color: black;
          }
        `}</style>
      </div>
    );
  }
}

export default Button;