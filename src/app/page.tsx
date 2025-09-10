"use client";
import Tab from "./Components/shared/Tab";
import AppIcon from "./assets/icons/AppIcon1";

export default function HomePage() {



  // const toggle = (state:boolean) => setIsActive(!state)
  const items = [
    { id: 1, icon: <AppIcon /> },
    { id: 2, icon: <AppIcon /> },
    { id: 3, icon: <AppIcon /> },
    { id: 4, text:"ape" },
  ];


  return (
    <>
      {/* 
      <div className={`p-4 ${isActive ? "bg-red-500" : "bg-white"}`}>
        <Toggle onChange={toggle}  isChecked={isActive}/>
      </div> */}

      {/* <Tab variant="large" items={items}/> */}
      <Tab
        variant="small"
        items={items}
        divided       
      />



      
    </>
  );
}
