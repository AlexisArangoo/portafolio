import "./styles/NavBarMenu.css";

const NavBarMenu = ({isChecked, setIsChecked}) => {

    const handleCheckboxChange = () => {
        const newCheckedValue = !isChecked;
        setIsChecked(newCheckedValue);

    };

  return (
    <div className="container-toogle">
      <input type="checkbox" id="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </div>
  );
};

export default NavBarMenu;
