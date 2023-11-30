import React from "react";
import { getInitialData } from "./utils/index";
import Header from "./components/Header";
import CatatanList from "./components/catatan/CatatanList";
import CatatanInput from "./components/catatan/CatatanInput";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catatans: getInitialData(),
      search: "",
    };

    // binding
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArsipHanlder = this.onArsipHanlder.bind(this);
    this.onAddCatatanHandler = this.onAddCatatanHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const catatans = this.state.catatans.filter((catatan) => catatan.id !== id);
    this.setState({ catatans });
  }

  onArsipHanlder(id) {
    const catatans = this.state.catatans.map((catatan) =>
      catatan.id === id ? { ...catatan, archived: !catatan.archived } : catatan
    );
    this.setState({ catatans });
  }

  onAddCatatanHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        catatans: [
          ...prevState.catatans,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  render() {
    const catatanSearch = this.state.catatans.filter((catatan) =>
      catatan.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    console.log(catatanSearch);
    const catatanAktif = catatanSearch.filter((catatan) => {
      return catatan.archived === false;
    });
    const catatanArsip = catatanSearch.filter((catatan) => {
      return catatan.archived === true;
    });

    return (
      <>
        <Header
          catatans={catatanSearch}
          search={this.state.search}
          onSearch={this.onSearchHandler}
        />
        <div className="container">
          <section className="buat-catatan">
            <h2>Buat Catatan</h2>
            <CatatanInput addCatatan={this.onAddCatatanHandler} />
          </section>
          <hr />
          <section className="catatan-aktif">
            <h2>Catatan Aktif</h2>
            <CatatanList
              catatans={catatanAktif}
              onDelete={this.onDeleteHandler}
              onArsip={this.onArsipHanlder}
            />
          </section>
          <hr />
          <section className="catatan-arsip">
            <h2>Arsip</h2>
            <CatatanList
              catatans={catatanArsip}
              onDelete={this.onDeleteHandler}
              onArsip={this.onArsipHanlder}
            />
          </section>
        </div>
      </>
    );
  }
}

export default App;
