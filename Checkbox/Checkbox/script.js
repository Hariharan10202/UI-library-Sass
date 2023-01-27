const checkboxHandler = (event) => {
  event.target.children[0].checked =
    event.target.children[0].checked === true ? false : true;
};
