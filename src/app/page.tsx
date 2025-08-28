import Checkbox from "./Components/shared/Checkbox";

import Input from "./Components/shared/Input";
import NavigateRail from "./Components/shared/NavigateRail";
import SearchInput from "./Components/shared/Search";

export default function HomePage() {
  return (
    <div>
      {/* <div className="flex flex-col  pt-20 space-y-4 p-6">
    <LargeButton variant="PrimarySmall">Text</LargeButton>
         <LargeButton variant="PrimaryBig">Button Text</LargeButton>
         <LargeButton variant="SecondaryBig">Add new</LargeButton>
         <LargeButton variant="SecondaryMedium">Apply Filter</LargeButton>
         <LargeButton variant="SecondarySmall">Add Filter</LargeButton>
         <LargeButton variant="Tertiary"> <StarsIcon /></LargeButton> 
    </div> */}

      {/* 
<MeidumButtons variant="PrimaryAdd" >Add new client</MeidumButtons>
<MeidumButtons variant="PrimarySelect">Last 30 days</MeidumButtons>
<MeidumButtons variant="PrimaryFilter"> Advanced Filter</MeidumButtons> 
<MeidumButtons variant="PrimaryPdf">Export PDF</MeidumButtons>
<MeidumButtons variant="TertiarySelect">Group Sources</MeidumButtons>
<MeidumButtons variant="Secondary"><LeftDirectionIcon/></MeidumButtons>
<MeidumButtons variant="TertiaryChose">  <XIcon />   </MeidumButtons> */}

      <div className="flex flex-col space-y-10 px-50 pt-50">
        {/* <Input variant="fields"/> */}
        {/* <Input variant="text"  /> */}
        {/* <Input variant="date" />  */}
      </div>

      {/* <Checkbox variant="group" status="3" > </Checkbox> */}
      {/* <Checkbox variant="solid" status="empty">1 </Checkbox>  */}

      {/* <div className=" flex flex-col space-y-10 pt-50 px-50 justify-center">
    <DropDown variant="DropDownLarge" status="default"></DropDown> 
 <DropDown variant="DropDownSmall" status="default"></DropDown>
 </div> */}

      {/* <SearchInput variant="SearchInput" status="default"></SearchInput>  */}
      {/* <div className="flex justify-center pt-50">
      <Navigate variant="NavigationSingle"></Navigate>
      </div> */}
          <div className="flex flex-col space-y-10 px-50 pt-50">
      <NavigateRail variant="single"  >Verification</NavigateRail>
  <NavigateRail variant="group" > </NavigateRail>
  </div>

      {/*  
     <LargeTabs variant="TabsGroup" status="5th" > </LargeTabs>
<LargeTabs variant="TabsSingle">Advisorr</LargeTabs>
*/}

      {/* <SmallTabs variant="TabGroup" status="2nd">  </SmallTabs>  */}
      {/* 
      <SmallTabs variant="TabLine"> </SmallTabs>*/}
      {/* 
      <Checkbox variant="CheckSolid" status="number"> 1</Checkbox>

      <Checkbox variant="CheckSolid" status="check"></Checkbox>

      <Checkbox variant="CheckSolid" status="empty"> </Checkbox>
      <Checkbox variant="CheckGroup" status="1st"> </Checkbox>
 */}

      {/* <RadioButtons variant="RadioSingle">  </RadioButtons>
 <RadioButtons variant="RadioGroup"> Option 1</RadioButtons>
 */}
      {/* <OtherComponent variant="Drop"></OtherComponent> */}
      {/* <OtherComponent variant="Toglle" status="off"></OtherComponent> */}
    </div>
  );
}
