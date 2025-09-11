import AppIcon from "./assets/icons/AppIcon1";
import Tab from "./Components/shared/Tab";

export default function HomePage() {



  // const toggle = (state:boolean) => setIsActive(!state)
  const items = [
    { id: 1, icon: <AppIcon /> },
    { id: 2, icon: <AppIcon /> },
    { id: 3, icon: <AppIcon /> },
    { id: 4, text:"ape" },
  ];


  return (
    <div>
<div className="flex flex-col space-y-10">
<Tab variant="large" items={items} disabled/>
<Tab variant="small" items={items}/>
<Tab variant="small" items={items} divided/>
</div>



    </div>
  );
}
