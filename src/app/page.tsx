import LeftDirectionIcon from "./assets/icons/LeftDIrectionIcon";
import StarsIcon from "./assets/icons/StarsIcon";
import XIcon from "./assets/icons/XIcon";
import Checkbox from "./Components/shared/Checkbox";
import Input from "./Components/shared/Inputs";
import Inputs from "./Components/shared/Inputs";


export default function HomePage() {
  return (
    <div className="flex justify-center   pt-20 space-y-4 p-6">
      {/*<LargeButton variant="PrimarySmall">Text</LargeButton>
         <LargeButton variant="PrimaryBig">Button Text</LargeButton>
         <LargeButton variant="SecondaryBig">Add new</LargeButton>
         <LargeButton variant="SecondaryMedium">Apply Filter</LargeButton>
         <LargeButton variant="SecondarySmall">Add Filter</LargeButton>
         <LargeButton variant="Tertiary"> <StarsIcon /></LargeButton> */}

      {/* 
<MeidumButtons variant="PrimaryAdd" >Add new client</MeidumButtons>
<MeidumButtons variant="PrimarySelect">Last 30 days</MeidumButtons>
<MeidumButtons variant="PrimaryFilter"> Advanced Filter</MeidumButtons> 
<MeidumButtons variant="PrimaryPdf">Export PDF</MeidumButtons>
<MeidumButtons variant="TertiarySelect">Group Sources</MeidumButtons>
<MeidumButtons variant="Secondary"><LeftDirectionIcon/></MeidumButtons>
<MeidumButtons variant="TertiaryChose">  <XIcon />   </MeidumButtons> */}

{/*       
      <Inputs variant="InputData" status="default" />
      <Inputs variant="InputFields" status="default" />
      <Inputs variant="InputText" status="default" label="Label" />  */}
      <div className="w-full flex flex-col space-y-10">
{/*             
      <Input variant="fields"  />
      <Input variant="text"/>
      <Input variant="date" /> */}
 <Checkbox variant="group" status="2th"> </Checkbox>
{/* 
      <Checkbox variant="CheckSolid" status="check"></Checkbox>

      <Checkbox variant="CheckSolid" status="empty"> </Checkbox>
      <Checkbox variant="CheckGroup" status="1st"> </Checkbox> */}
      </div>

      {/* <DropDown variant="DropDownLarge" status="default"></DropDown> 
 <DropDown variant="DropDownSmall" status="default"></DropDown> */}

      {/* <SearchInput variant="SearchInput" status="default"></SearchInput> */}

      {/* <Navigate variant="NavigationGroup"> </Navigate> */}

      {/* <NavigateRail variant="RailSingle">Verification</NavigateRail>
        <NavigateRail variant="RailGroup"> </NavigateRail>

       */}
      {/* <LargeTabs variant="TabsGroup" status="5th" > </LargeTabs> 
<LargeTabs variant="TabsSingle">Advisorr</LargeTabs>*/}

      {/* <SmallTabs variant="TabGroup" status="1st">  </SmallTabs>
      <SmallTabs variant="TabLine"> </SmallTabs> */}
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
