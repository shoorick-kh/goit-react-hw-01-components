import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.container}>
      {(title = true && <h2 className={s.title}>{title}</h2>)}

      <ul className={s.list}>
        {stats.map(stat => (
          <li className={s.item} key={stat.id}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.name}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  stats: PropTypes.number.isRequired,
};
