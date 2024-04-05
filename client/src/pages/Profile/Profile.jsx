import React, { useEffect, useState } from "react";
import axios from "axios"
import "./Profile.scss"
import paymentCard from "../../assets/images/payment-card.png"
import edit from "../../assets/images/pen.svg"
import add from "../../assets/images/plus.svg"
import manage from "../../assets/images/manage.svg"

const baseURL = "http://localhost:8080/api"

const Profile = () => {

  const [user, setUser] = useState({})
  const [paymentMethods, setPaymentMethods] = useState([])

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${baseURL}/profile`)
        console.log(response.data)
        setUser(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getUser()
  }, [])

  useEffect(() => {
    const getPaymentMethods = async () => {
      try {
        const response = await axios.get(`${baseURL}/payments`)
        setPaymentMethods(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getPaymentMethods()
  }, [user])

  return (
    <main className="profile">
      <h1 className="profile__heading">Profile</h1>
      <div className="profile__content">
        <div className="profile__row">
          <article className="profile__card">
            <div className="profile__card-heading-wrapper profile__card-heading-wrapper--icons">
              <h2 className="profile__card-heading">{user.first_name} {user.last_name}</h2>
              <img className="profile__card-heading-icon" src={edit} />
            </div>
            <div className="profile__flex-items">
              <div className="profile__item">
                <h3 className="profile__item-heading" >Email</h3>
                <p className="profile__item-value">{user.email}</p>
              </div>
              <div className="profile__item">
                <h3 className="profile__item-heading" >Phone Number</h3>
                <p className="profile__item-value">{user.phone_number}</p>
              </div>
            </div>
          </article>
          <article className="profile__card">
            <div className="profile__card-heading-wrapper profile__card-heading-wrapper--icons">
              <h2 className="profile__card-heading">Privacy</h2>
              <img className="profile__card-heading-icon" src={edit} />
            </div>
            <div className="profile__flex-items">
              <div className="profile__item">
                <h3 className="profile__item-heading" >User</h3>
                <p className="profile__item-value" >Sarah15246@</p>
              </div>
              <div className="profile__item">
                <h3 className="profile__item-heading" >Password</h3>
                <p className="profile__item-value" >**********</p>
              </div>
            </div>
          </article>

        </div>
        <div className="profile__row">
          <article className="profile__card">
            <div className="profile__card-heading-wrapper" >
              <h2 className="profile__card-heading" >Addresses</h2>
              <div className="profile__card-heading-icon-wrapper" >
                <img className="profile__card-heading-icon" src={add} />
                <p className="profile__card-heading-text">Add</p>
              </div>
            </div>
            <div className="profile__flex-items profile__flex-items--address-cards">
              <div className="profile__address-card">
                <div className="profile__address-card-heading">
                  <h3 className="profile__address-heading">Shipping Address</h3>
                  <img className="profile__card-heading-icon" src={edit} />
                </div>
                <div className="profile__address-card-body">
                  <p className="profile__address-card-text" >{user.first_name} {user.last_name}</p>
                  <p className="profile__address-card-text" >{user.shipping_address}</p>
                </div>
              </div>
              <div className="profile__address-card">
                <div className="profile__address-card-heading">
                  <h3 className="profile__address-heading">Billing Address</h3>
                  <img className="profile__card-heading-icon" src={edit} />
                </div>
                <div className="profile__address-card-body">
                  <p className="profile__address-card-text" >{user.first_name} {user.last_name}</p>
                  <p className="profile__address-card-text" >{user.shipping_address}</p>
                </div>
              </div>
            </div>
          </article>
          <article className="profile__card">
            <div className="profile__order-heading-wrapper">
              <h2 className="profile__card-heading">Orders</h2>
              <div className="profile__card-heading-icon-wrapper" >
                <img className="profile__card-heading-icon" src={manage} />
                <p className="profile__card-heading-text">Manage</p>
              </div>
            </div>
            <div className="profile__flex-items profile__flex-items--orders">
              <div className="profile__order-card profile__order-card--confirmed">
                <p className="profile__order-text" >Confirmed</p>
                <p className="profile__order-number">3</p>
              </div>
              <div className="profile__order-card profile__order-card--pending">
                <p className="profile__order-text" >Pending</p>
                <p className="profile__order-number">1</p>
              </div>
              <div className="profile__order-card profile__order-card--delivered">
                <p className="profile__order-text" >Delivered</p>
                <p className="profile__order-number">4</p>
              </div>
            </div>
          </article>
        </div>

        <div className="profile__row profile__row--payment-cards">
          <article className="profile__card">
            <div className="profile__payment-methods-heading-wrapper">
              <h2 className="profile__card-heading">Payment Methods</h2>
              <div className="profile__card-heading-icon-wrapper" >
                <img className="profile__card-heading-icon" src={add} />
                <p className="profile__card-heading-text">Add</p>
              </div>
            </div>
            <div className="profile__flex-items profile__flex-items--payment-cards">
              {paymentMethods.map((method) => (
                <div className="profile__method-card-wrapper">
                  <img className="profile__method-card" key={method.payment_id} src={paymentCard} />
                  <div className="profile__method-card-body">
                    <p className="profile__method-type" >{method.payment_type}</p>
                    <p className="profile__method-num">{method.card_cvv}</p>
                    <p className="profile__method-name">{user.first_name} {user.last_name}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
          <article className="profile__card">
            <h2 className="profile__card-heading" >Refunds</h2>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Profile;
