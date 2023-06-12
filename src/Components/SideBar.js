export default function SideBar(){
    return(
        <div>
                
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><button>Dashboard</button></li>
      <li><button>Studnent List</button></li>
      <li><button>Interview Notes</button></li>
      <li><button>Logout</button></li>
    </ul>
  
  </div>
</div>
        </div>
    )
}