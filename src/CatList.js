// write your CatList component hereimport React from 'react';

class CatList extends React.Component {
  listCats = () => {
    return this.props.Catpics.map(cat => <img key={cat.id} src={cat.url} alt={cat.window} />)
  }

  render() {
    return (
      <div>
        {this.listCats()}
      </div>
      <div>
        {this.props.
      </div>
    )
  }
}

export default CatList;