import React from 'react';
import NavegationBar from '../components/NavegationBar';
import AuthorCard from '../components/AuthorCard';


class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <NavegationBar />
        <div className='AuthorCards'>
        { this.props.authors.map((author, index) => (
          <AuthorCard imgName={author.photo} author={author.author} id={index} key={index} />
        ))}
        </div>
      </div>
    )
  }
}

export default Home;