import React from 'react';
import PropTypes from 'prop-types';
import styles from './Characters.css';

export default function Character({ img, name, species }) {
  return (
    <dl className={styles.List}>
      <dt className={styles.Center}>Image</dt>
      <dd><img src={img}></img></dd>

      <dt className={styles.Center}>Name</dt>
      <dd>{name}</dd>

      <dt className={styles.Center}>Species</dt>
      <dd>{species}</dd>
    </dl>
  );
}

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};