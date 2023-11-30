function Header({ search, onSearch }) {
  return (
    <div className="header container-full">
      <div className="header-title">
        <h1>Notes</h1>
      </div>
      <div className="header-search">
        <input
          className="input-search"
          type="search"
          placeholder="Cari catatan..."
          onChange={(event) => onSearch(event)}
        />
      </div>
    </div>
  );
}

export default Header;
