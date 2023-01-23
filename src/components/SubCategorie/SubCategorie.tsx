import './SubCategorie.css';

type SubCategorieProps = {
    closed: boolean
}

function SubCategorie({closed} : SubCategorieProps) {
  return (
    <div className="sub-categories-wrapper" style={{ height: closed?0:54 }}>
        <div className="sub-categories-container">
            <div className='sub-categorie'>dsjfisdjf</div>
            <div className='sub-categorie'>dsjfisdjf</div>
            <div className='sub-categorie'>dsjfisdjf</div>
        </div>
    </div>
  );
}

export default SubCategorie;
