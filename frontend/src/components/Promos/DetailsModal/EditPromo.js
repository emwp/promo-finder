import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { PromoStoreContext } from '../../../stores/PromoStore';
import { observer } from 'mobx-react-lite';

const EditPromo = observer(props => {
  const promoStore = useContext(PromoStoreContext);

  const closeEditMode = () => {
    promoStore.editingPromo = !promoStore.editingPromo;
  };

  const titleChangeHandler = event => {
    promoStore.title = String(event.target.value);
  };
  const linkChangeHandler = event => {
    promoStore.link = event.target.value.toString();
  };
  const storeChangeHandler = event => {
    promoStore.store = event.target.value;
  };
  const priceChangeHandler = event => {
    promoStore.price = +event.target.value;
  };
  const descriptionChangeHandler = event => {
    promoStore.description = event.target.value;
  };

  const updateHandler = event => {
    event.preventDefault();
    promoStore.loading = true;
    const getToken = props.token;

    if (promoStore.title === '') {
      promoStore.title = props.title;
    }
    if (promoStore.link === '') {
      promoStore.link = props.link;
    }
    if (promoStore.store === '') {
      promoStore.store = props.store;
    }
    if (promoStore.price === '') {
      promoStore.price = props.price;
    }
    if (promoStore.description === '') {
      promoStore.description = props.desc;
    }

    axios
      .post(
        'http://localhost:8000/graphql',
        {
          query: `
            mutation {
              editPromo(editInput: {id: "${props.id}", title: "${promoStore.title}", link: "${
            promoStore.link
          }", store: "${promoStore.store}", description: "${promoStore.description}", price: ${
            promoStore.price
          } }) {
                link
              }
             }
           `,
        },
        {
          headers: {
            Authorization: 'Bearer ' + getToken,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        console.log(res);
        promoStore.loading = false;
      })
      // .then(res => {
      //   // console.log(res.data.data.createPromo);
      //   const promos = [...promoStore.listedPromos];

      //   promos.push({
      //     _id: res.data.data.createPromo._id,
      //     title: res.data.data.createPromo.title,
      //     link: res.data.data.createPromo.link,
      //     store: res.data.data.createPromo.store,
      //     description: res.data.data.createPromo.description,
      //     price: res.data.data.createPromo.price,
      //     date: res.data.data.createPromo.date,
      //     creator: {
      //       _id: authStore.userId,
      //     },
      //   });
      //   promoStore.listedPromos = promos;
      //   promoStore.loading = false;
      // })
      // .then(endNewPromo())
      // // .then(props.fetchPromos)
      .catch(err => {
        console.log(err);
        promoStore.loading = false;
      });
  };

  return (
    <ModalWrapper>
      <header>Edit Promo</header>
      <form onSubmit={updateHandler}>
        <section>
          <input
            type="text"
            placeholder="Title"
            required={true}
            minLength="3"
            defaultValue={props.title}
            onChange={titleChangeHandler}
          />
          <input
            type="URL"
            placeholder="Promo URL"
            required={true}
            defaultValue={props.link}
            onChange={linkChangeHandler}
          />
          <input
            type="text"
            placeholder="Store"
            minLength="3"
            required={true}
            defaultValue={props.store}
            onChange={storeChangeHandler}
          />
          <input
            type="number"
            placeholder="Price"
            required={true}
            defaultValue={props.price}
            onChange={priceChangeHandler}
          />
          <textarea
            rows="4"
            type="text"
            required={true}
            placeholder="Description"
            defaultValue={props.desc}
            onChange={descriptionChangeHandler}
          />
        </section>
        <section className="btn">
          <button type="button" onClick={closeEditMode}>
            Cancel
          </button>
          <button type="submit">Continue</button>
        </section>
      </form>
    </ModalWrapper>
  );
});

export default EditPromo;

const ModalWrapper = styled.div`
  width: 90%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 10vh;
  left: 5%;
  border-radius: 0.3rem;
  z-index: 150;

  header {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fe6756;
    padding: 1rem;
    text-align: center;
  }

  textarea {
    resize: vertical;
    max-height: 20rem;
  }

  input,
  textarea {
    width: 90%;
    margin: 0.5rem 5% 0.5rem;

    font-size: 1rem;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 10px 10px;
    font-family: inherit;
  }

  button {
    border: 2px solid #fe6756;
    border-radius: 5px;
    font-size: 1rem;
    color: #fe6756;
    background: white;
    margin: 0.5rem 0.5rem 1rem 0.5rem;
    padding: 4px 0;
    cursor: pointer;
    width: 30%;
    font-family: inherit;
    display: inline-block;
  }

  button:hover,
  button:active {
    color: white;
    background: #fe6756;
    transition: 0.3s;
  }

  section.btn {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    width: 35rem;
    left: calc((100% - 35rem) / 2);
  }
`;
