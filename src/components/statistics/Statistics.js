import PropTypes from 'prop-types';
import './Statistics.css';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {(title = true && <h2 className="statistics__title">{title}</h2>)}

      <ul className="statistics__list">
        {stats.map(stat => (
          <li className="statistics__item" key={stat.id}>
            <span className="statistics__label">{stat.label}</span>
            <span className="statistics__name">{stat.percentage}%</span>
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
