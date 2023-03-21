import  './sidebar.css';

const Sidebar = () => {
    const categories = [{id:1,name:'category-1'},
    {id:2,name:'category-2'},
    {id:3,name:'category-3'},
]
  return (
    <div className='sidebar'>
      <div className="sidebar-title">
        ABOUT ME
      </div>
      <img src="https://cdn.pixabay.com/photo/2013/04/03/21/25/flower-100263_960_720.jpg" alt="" className="sidebar-img" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dignissimos exercitationem at iste voluptatibus nihil ipsum vero molestiae molestias? Dolore, nulla ad nobis atque laborum tempore velit magnam quos quasi?</p>
    <div className="sidebar-item">
      <span className="sidebar-title">CATEGORIES</span>
      <ul className="sidebar-list">
      {categories.map((category)=>{
        return(
        <li key={category.id} className="sidebar-List-item">{category.name}</li>
        )
      })}
      </ul>
    </div>
    <div className="sidebar-item">
      <span className="sidebar-title">FOLLOW US</span>
      <div className="sidebar-social">
      <i className=" sidebar-icon fa-brands fa-facebook-square"></i>
    <i className=" sidebar-icon fa-brands fa-twitter-square"></i>
    <i className=" sidebar-icon fa-brands fa-pinterest-square"></i>
    <i className=" sidebar-icon fa-brands fa-instagram-square"></i>
      </div>

    </div>
    </div>
  )
}

export default Sidebar