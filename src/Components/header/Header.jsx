import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Collapse,
  Container,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
} from "reactstrap";
import logo from "../../static/images/pitchr.png";

import {
  addToCart,
  removeCartItem,
  removeWishListItem,
} from "../../store/reducer/productReducer";

function Header() {
  const wishListItems = useSelector((state) => state.products.wishList);
  const cartItems = useSelector((state) => state.products.cart);
  const allProducts = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [wishListOpen, setWishListOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the window width is below a certain value (e.g., 768px)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleNav = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggle = () => setIsOpen(!isOpen);
  const togglewWishList = () => setWishListOpen(!wishListOpen);
  const toggleCartList = () => setCartOpen(!cartOpen);

  const navItems = [
    {
      label: "Home",
      to: "/",
      dropdown: false,
    },
    {
      label: "Investor",
      to: "/index-2",
      dropdown: false,
    },
    {
      label: "Startup",
      to: "/index-3",
      dropdown: false,
    },
    {
      label: "Contact",
      dropdown: false,
      to: "/contact-us-2",
    },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(
    Array(navItems.length).fill(false)
  );

  const toggleDropdown = (index) => {
    const newArray = [...dropdownOpen];
    newArray[index] = !newArray[index];
    setDropdownOpen(newArray);
  };
  const navigate = useNavigate();

  const handleLinkClick = (to) => {
    console.log("to", to);
    navigate(to, { replace: true });
  };
  const handleDeleteItem = (index) => {
    // Dispatch the action to remove the cart item from the reducer
    dispatch(removeWishListItem(index));
  };
  const subtotal = wishListItems.reduce((total, item) => {
    //const product = allProducts.find((prod) => prod.id === item.id);
    if (item) {
      return total + item.salePrice * item.quantity;
    }
    // console.log("product", total);
    return total;
  }, 0);
  const subtotalCart = cartItems.reduce((total, item) => {
    //const product = allProducts.find((prod) => prod.id === item.id);
    if (item) {
      return total + item.salePrice * item.quantity;
    }
    // console.log("product", total);
    return total;
  }, 0);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // dispatch(removeWishListItem(product.id));
    toast("Product goes to cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [cartItems1, setCartItems] = useState(3); // Replace with your actual cart items count

  // console.log(wishListItems?.length);
  return (
    <div className="">
      <header className="site-header">
        <div id="header-wrap">
          <Container className="container">
            <Row className="row">
              {/* <!--menu start--> */}
              <Col className="col">
                <Nav className="navbar navbar-expand-lg p-4 shadow bg-white">
                  <NavbarBrand href="/" className="navbar-brand logo">
                    <img src={logo} alt="" />
                  </NavbarBrand>

                  <NavbarToggler onClick={toggleNav} className="me-2" />
                  <Collapse className="navbar-collapse" isOpen={!isCollapsed}>
                    <Nav className="navbar-nav mx-auto">
                      {navItems.map((item, index) => (
                        <NavItem key={item.label}>
                          <NavLink onClick={() => handleLinkClick(item.to)}>
                            {item.label}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </Collapse>

                  <Nav className="navbar-nav ml-auto align-items-center">
                    <div className="d-flex align-items-center">
                      <a
                        href="https://my.pitchr.dk/auth/sign-up"
                        className="login-btn btn-link ms-3"
                      >
                        <i className="bi bi bi-person-plus me-2 fs-3 align-middle"></i>
                      </a>
                      <a
                        className="login-btn btn-link ms-3"
                        href="https://my.pitchr.dk/auth/sign-in"
                      >
                        <i className="bi bi-person me-2 fs-3 align-middle"></i>
                      </a>

                      {/* <div
                        style={{ cursor: "pointer" }}
                        className="ms-2 togglerCanvas d-inline-block border-0 px-2 py-1 bg-white shadow"
                        onClick={toggle}
                      >
                        <i className="bi bi-list-nested fs-3 text-dark"></i>
                      </div> */}
                    </div>
                  </Nav>
                </Nav>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <Offcanvas
        className="bg-dark"
        direction="end"
        isOpen={isOpen}
        toggle={toggle}
      >
        <OffcanvasHeader>
          <Button
            className="btn-close bg-transparent fs-1 ms-auto"
            onClick={toggle}
          >
            <i className="bi bi-x-octagon"></i>
          </Button>
        </OffcanvasHeader>
        <OffcanvasBody className="px-md-10 px-4 py-8">
          <img
            className="img-fluid side-logo mb-3"
            src="images/logo-white.png"
            alt=""
          />
          <p className="mb-0 text-white lead">
            Taypo - Multipurpose Bootstrap5 Template is Most PowerFull template
            2022 For Everyone, Start working with an company that provide
            everything you need to generate awareness.
          </p>
          <div className="form-info border-top border-dark pt-6 mt-6">
            <h5 className=" text-white border-bottom border-white d-inline-block">
              Contact info
            </h5>
            <ListGroup className="mt-4 bg-transparent px-0">
              <ListGroupItem className="mb-2 h6 text-light bg-transparent px-0">
                <i className="text-primary fs-4 align-middle bi bi-geo-alt me-2"></i>
                423B, Road Wordwide Country, USA
              </ListGroupItem>
              <ListGroupItem className="mb-2 h6 bg-transparent px-0">
                <i className="text-primary fs-4 align-middle bi bi-telephone me-2"></i>
                <a className="text-light" href="tel:+912345678900">
                  +91-234-567-8900
                </a>
              </ListGroupItem>
              <ListGroupItem className="h6 bg-transparent px-0">
                <i className="text-primary fs-4 align-middle bi bi-envelope me-2"></i>
                <a
                  className="text-light"
                  href="mailto:skytouchinfotech01@gmail.com"
                >
                  skytouchinfotech01@gmail.com
                </a>
              </ListGroupItem>
            </ListGroup>
          </div>
          <div className="border-top border-dark pt-6 mt-6">
            <h5 className="text-white border-bottom border-white">
              Follow Us:
            </h5>
            <ListGroup className="mt-4 px-0" horizontal>
              <ListGroupItem className="me-2 bg-transparent px-0">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-facebook"></i>
                </Link>
              </ListGroupItem>

              <ListGroupItem className="me-2 bg-transparent px-2">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-dribbble"></i>
                </Link>
              </ListGroupItem>
              <ListGroupItem className="me-2 bg-transparent px-2">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-instagram"></i>
                </Link>
              </ListGroupItem>

              <ListGroupItem className="me-2 bg-transparent px-2">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-twitter"></i>
                </Link>
              </ListGroupItem>

              <ListGroupItem className="me-2 bg-transparent px-2">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </OffcanvasBody>
      </Offcanvas>
      <Offcanvas
        className="bg-dark"
        direction="end"
        isOpen={wishListOpen}
        toggle={togglewWishList}
      >
        <div>
          <Row>
            <Col xs={9} className="py-4 align-items-center">
              {" "}
              <h5 className="text-white px-4">
                Your Wishlist ({wishListItems?.length})
              </h5>
            </Col>
            <Col xs={3} className="align-items-center">
              {" "}
              <Button
                className="btn-close bg-transparent fs-1 ms-auto"
                onClick={togglewWishList}
              >
                <i className="bi bi-x-octagon"></i>
              </Button>
            </Col>
          </Row>
        </div>
        <OffcanvasBody className="">
          {wishListItems.map((product) => {
            if (product) {
              return (
                <div>
                  <Row className="align-items-center my-4">
                    <Col xs={5} className="d-flex align-items-center">
                      <div
                        type="submit"
                        className="btn-close bg-transparent fs-1 ms-auto mx-2"
                        onClick={() => {
                          handleDeleteItem(product.id);
                        }}
                      >
                        <AiOutlineCloseCircle />
                      </div>
                      <a>
                        <img
                          className="img-fluid"
                          src={product.image}
                          alt="..."
                        />
                      </a>
                    </Col>
                    <Col xs={5}>
                      <h6>
                        <div className="link-title text-white">
                          {product.name}{" "}
                        </div>
                      </h6>
                      <div className="product-meta">
                        <span className="mx-2 text-primary">
                          ${product.salePrice.toFixed(2)}
                        </span>
                        <span className="text-muted">x {product.quantity}</span>
                      </div>
                      <div className="product-meta"></div>
                    </Col>
                    <Col xs={2} className="d-flex align-items-center mt-4">
                      <span
                        onClick={() => handleAddToCart(product)}
                        className="mx-2 btn text-white fs-1 ms-auto bg-transparent"
                      >
                        <BsFillCartCheckFill />
                      </span>
                    </Col>
                  </Row>
                </div>
              );
            }

            return null;
          })}
          <hr className="my-5" />
          <div className="d-flex justify-content-between align-items-center mb-8">
            <span className="text-muted">Subtotal:</span>
            <span className="text-white">${subtotal.toFixed(2)}</span>
          </div>
          <Link
            to="/product-cart"
            className="btn btn-primary btn-animated mr-2"
          >
            <i className="las la-shopping-cart mr-1"></i>View Cart
          </Link>
          <Link to="/product-checkout" className="btn btn-dark">
            <i className="las la-money-check mr-1"></i>Continue To Checkout
          </Link>
        </OffcanvasBody>
      </Offcanvas>
      <Offcanvas
        className="bg-dark"
        direction="end"
        isOpen={cartOpen}
        toggle={toggleCartList}
      >
        <div>
          <Row>
            <Col xs={9} className="py-4 align-item-center">
              {" "}
              <h5 className="text-white px-4">
                Your Cart ({cartItems?.length})
              </h5>
            </Col>
            <Col xs={3} className="align-item-center">
              {" "}
              <Button
                className="btn-close bg-transparent fs-1 ms-auto"
                onClick={toggleCartList}
              >
                <i className="bi bi-x-octagon"></i>
              </Button>
            </Col>
          </Row>
        </div>
        <OffcanvasBody>
          {cartItems.map((product) => {
            if (product) {
              return (
                <div>
                  <Row className="align-items-center my-5">
                    <Col xs="5" className="d-flex align-items-center">
                      <div className="mr-4">
                        <Button
                          type="submit"
                          className="btn-close bg-transparent mx-2 fs-1 ms-auto"
                          onClick={() => {
                            dispatch(removeCartItem(product.id));
                          }}
                        >
                          <AiOutlineCloseCircle />
                        </Button>
                      </div>
                      <a>
                        <img
                          className="img-fluid"
                          src={product.image}
                          alt="..."
                        />
                      </a>
                    </Col>
                    <Col xs="5">
                      <h6>
                        <div className="link-title text-white">
                          {product.name}{" "}
                        </div>
                      </h6>
                      <div className="product-meta">
                        <span className="mx-2 text-primary">
                          ${product.salePrice.toFixed(2)}
                        </span>
                        <span className="text-muted">x {product.quantity}</span>
                      </div>
                      <div className="product-meta"></div>
                    </Col>
                  </Row>
                </div>
              );
            }

            return null;
          })}
          <hr className="my-5" />
          <div className="d-flex justify-content-between align-items-center mb-8">
            <span className="text-muted">Subtotal:</span>
            <span className="text-white">${subtotalCart.toFixed(2)}</span>
          </div>
          <Link
            to="/product-cart"
            className="btn btn-primary btn-animated mr-2"
          >
            <i className="las la-shopping-cart mr-1"></i>View Cart
          </Link>
          <Link to="/product-checkout" className="btn btn-dark">
            <i className="las la-money-check mr-1"></i>Continue To Checkout
          </Link>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default Header;
