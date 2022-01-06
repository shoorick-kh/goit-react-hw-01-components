import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section>
      {(title = true && <h2>{title}</h2>)}

      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
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
