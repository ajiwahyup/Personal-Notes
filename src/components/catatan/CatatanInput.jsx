import React from "react";

class CatatanInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addCatatan(this.state);
  }

  render() {
    return (
      <form
        action=""
        className="catatan-input container"
        onSubmit={this.onSubmitHandler}
      >
        <span>Sisa Karakter = {this.state.limit - this.state.title.length}</span>
        <input
          className="input-title"
          type="text"
          placeholder="Judul catatan..."
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
          maxLength={50}
        />
        <textarea cols="30" rows="10"
          className="input-catatan"
          placeholder="Tuliskan catatanmu..."
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default CatatanInput;
