import React, {Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Characters.css';

export default class Character extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }

  render() {
    const { img, name, species } = this.props;

    return (
      <dl className={styles.List}>
        <dt className={styles.Center}></dt>
        <dd><img src={img}></img></dd>

        <dt className={styles.Center}>Name</dt>
        <dd>{name}</dd>

        <dt className={styles.Center}>Species</dt>
        <dd>{species}</dd>
      </dl>
    );
  }
}
