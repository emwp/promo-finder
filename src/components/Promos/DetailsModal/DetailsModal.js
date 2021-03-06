import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import EditPromo from './EditPromo';
import { AuthStoreContext } from '../../../stores/AuthStore';
import { PromoStoreContext } from '../../../stores/PromoStore';
import { observer } from 'mobx-react-lite';

const DetailsModal = observer(props => {
  const authStore = useContext(AuthStoreContext);
  const promoStore = useContext(PromoStoreContext);

  const selectedPromo = props.promos.find(promo => promo._id === props.selected);

  const editHandler = () => {
    promoStore.editingPromo = !promoStore.editingPromo;
  };

  const deleteHandler = () => {
    promoStore.loading = true;
    const getToken = authStore.token;
    if (authStore.userId === selectedPromo.creator._id) {
      axios
        .post(
          'https://promo-finder.herokuapp.com/graphql',
          {
            query: `
            mutation {
              deletePromo(id: "${selectedPromo._id}") {
               _id
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
        .then(() => {
          let updatedPromos = [...promoStore.listedPromos];

          updatedPromos = updatedPromos.filter(promo => promo._id !== selectedPromo._id);
          promoStore.listedPromos = updatedPromos;
          promoStore.showDetails = false;
          promoStore.loading = false;
          return promoStore.listedPromos;
        })
        .catch(err => {
          console.log(err);
          promoStore.loading = false;
        });
    } else {
      throw new Error('Unauthorized');
    }
  };

  return (
    <React.Fragment>
      <ModalWrapper>
        <header>
          <a target="_blank" rel="noopener noreferrer" href={selectedPromo.link}>
            {selectedPromo.title}
          </a>
        </header>
        <section className="promo_details">
          <p>Price: ${selectedPromo.price.toFixed(2)}</p>
          <p>Date Added: {new Date(selectedPromo.date).toLocaleDateString('pt-BR')}</p>
          <p>Store: {selectedPromo.store}</p>
        </section>
        <section className="promo_description">
          <p>{selectedPromo.description}</p>
        </section>
        <section className="btn">
          {authStore.userId === selectedPromo.creator._id ? (
            <button onClick={editHandler}>Edit</button>
          ) : null}
          {authStore.userId === selectedPromo.creator._id ? (
            <button type="button" onClick={deleteHandler}>
              Delete
            </button>
          ) : null}
          <button type="button" onClick={props.setDetails}>
            Close
          </button>
        </section>
      </ModalWrapper>
      {promoStore.editingPromo && (
        <EditPromo
          id={selectedPromo._id}
          title={selectedPromo.title}
          link={selectedPromo.link}
          store={selectedPromo.store}
          price={selectedPromo.price}
          desc={selectedPromo.description}
          creator={selectedPromo.creator}
          date={selectedPromo.date}
          token={authStore.token}
        />
      )}
    </React.Fragment>
  );
});

export default DetailsModal;

const ModalWrapper = styled.div`
  width: 90%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 10vh;
  left: 5%;
  border-radius: 0.3rem;
  z-index: 150;

  header {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fe6756;
    padding: 0 1rem;
    margin-top: 0.5rem;
    text-align: center;
    padding: 1rem;
  }

  a {
    color: #fe6756;
    text-decoration: none;
  }

  .promo_details {
    color: #686868;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 0 1.2rem;
  }

  .promo_description p {
    margin: 0 1rem 0.7rem 1.2rem;
    padding: 1rem 0;
    color: #fe6756;
    text-align: justify;
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
    width: 25%;
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
