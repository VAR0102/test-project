
import AccIcon from "./assets/icons/AccIcon";
import AddIcon from "./assets/icons/AddIcon";
import AssetsIcon from "./assets/icons/AssetsIcon";
import BudgetIcon from "./assets/icons/BudgetIcon";
import ChatIcon from "./assets/icons/ChatIcon";
import CurrencyIcon from "./assets/icons/CurrecnyIcon";
import DropArrowIcon from "./assets/icons/DropArrowIcon";
import FileIcon from "./assets/icons/FileIcon";
import FileIcon2 from "./assets/icons/FileIcon2";
import HeatIcon from "./assets/icons/HeatIcon";
import HomeIcon from "./assets/icons/HomeIcon";
import LiabilIcon from "./assets/icons/LiabilIcon";
import MonitorIcon from "./assets/icons/MonitorIcon";
import NewFileIcon from "./assets/icons/NewFileIcon";
import ProfilIcon from "./assets/icons/ProfilIcon";
import SelectionIcon from "./assets/icons/SelectionIcon";
import SmileIcon from "./assets/icons/SmileIcon";
import SmoogVerifyIcon from "./assets/icons/SmoogVerifyIcon";
import TaxToolIcon from "./assets/icons/TaxToolIcon";
import VerifIcon from "./assets/icons/VerifIcon";
import DropDown from "./Components/shared/DropDown";
import Input from "./Components/shared/Input";
import Navigate from "./Components/shared/Navigate";
import NavigateRail from "./Components/shared/NavigateRail";

export default function HomePage() {
  // const groupItems = [
  //     { icon: <HomeIcon />, label: "Household" },
  //     { icon: <SmileIcon />, label: "Individuals" },
  //     { icon: <AddIcon />, label: "Verify Tax ID" },
  //     { icon: <FileIcon />, label: "Resources" },
  //   ];

  //  const labels = ["All", "Advisor", "Family", "Households", "Members"];

  const dropdownItems = [
    { icon: <FileIcon2 />, label: "All", href: "/all" },
    { icon: <SmoogVerifyIcon />, label: "Verification", href: "/verification" },
    { icon: <CurrencyIcon />, label: "Income", href: "/income" },
    { icon: <AssetsIcon />, label: "Assets", href: "/assets" },
    { icon: <LiabilIcon />, label: "Tax Records", href: "/tax-records" },
    { icon: <AccIcon />, label: "Associated Accounts", href: "/accounts" },
    { icon: <BudgetIcon />, label: "Budgeting", href: "/budgeting" },
    { icon: <MonitorIcon />, label: "Monitor", href: "/monitor" },
    { icon: <TaxToolIcon />, label: "Tax Filing Tools", href: "/tax-tools" },
    { icon: <ChatIcon />, label: "Client Communication Aids", href: "/communication" },
    { icon: <NewFileIcon />, label: "Compliance & Legal Updates", href: "/compliance" },
    { icon: <HeatIcon />, label: "HeatIcon", href: "/heat" },
  ];
  //  const items = [
  //     { icon: <TabsIcon1 />, rounded: "rounded-l-[12px] " },
  //     { icon: <TabsIcon2 />, rounded: "rounded-r-[12px]" },
  //   ];

  return (
    <div>
      {/* <div className="flex flex-col  pt-20 space-y-4 p-6">
         <Button  variant="primarySmall">Text</Button>
         <Button rightIcon={<CursorRightIcon/>}  variant="primaryBig">Button Text</Button>
         <Button leftIcon={<PlusIcon/>} variant="secondaryBig">Add new</Button>
         <Button  rightIcon={<CursorRightIcon/>} variant="secondaryMedium">Apply Filter</Button>
         <Button leftIcon="" variant="secondarySmall">Add Filter</Button>
         <Button variant="tertiary"> <StarsIcon /></Button> 
         <Button leftIcon={<MediumPlusIcon/>} variant="mediumAdd">Add new client</Button>
         <Button  rightIcon={<SelectIcon/>}  variant="mediumSelect">Last 30 daysr</Button>
         <Button  leftIcon={<AdvanceFilter/>} variant="mediumFilter">Advanced Filterr</Button>
         <Button  leftIcon={<PdfIcon/>}  variant="mediumPdf">Export PDF</Button>
         <Button  variant="mediumSecondary"> <LeftDirectionIcon/> </Button>
         <Button   rightIcon={<SelectIcon/>}  variant="mediumTertiarySelect">Group Sources</Button>
         <Button  variant="mediumTertiaryChose"><XIcon/></Button>
    </div> */}

      {/* 
<MeidumButtons variant="PrimaryAdd" >Add new client</MeidumButtons>
<MeidumButtons variant="PrimarySelect">Last 30 days</MeidumButtons>
<MeidumButtons variant="PrimaryFilter"> Advanced Filter</MeidumButtons> 
<MeidumButtons variant="PrimaryPdf">Export PDF</MeidumButtons>
<MeidumButtons variant="TertiarySelect">Group Sources</MeidumButtons>
<MeidumButtons variant="Secondary"><LeftDirectionIcon/></MeidumButtons>
<MeidumButtons variant="TertiaryChose">  <XIcon />   </MeidumButtons> */}
{/* 
      <div className="flex flex-col space-y-10 px-50 pt-50">
        <Input variant="fields" />
        <Input variant="text"  disabled />
        <Input variant="date"  disabled /> 
      </div> */}

      {/* <Checkbox variant="solid" status="empty">1 </Checkbox>  */}

      {/* <div className=" flex flex-col space-y-10 pt-50 px-50 justify-center">
        <DropDown
          size="small"
          label="Select Name"
          options={["Jino", "Kleymo", "Bogo"]}
          error="Please select an option"
          rightIcon={<SelectionIcon />}
          
        />

        <DropDown
          size="large"
          label="Select Name"
          options={["Nemra", "Gavra", "Rara"]}
          error="Please select an option"
          endIcon={<ProfilIcon />}
          rightIcon={<SelectionIcon />}
          disabled
        />
      </div> */}

      {/*       

      <SearchInput 
      variant="Search"
      label="Search...."
      leftIcon ={<SearchIcon/>}
      rightIcon ={<CommandIcon/>}
      rightIcon2 ={<SIcon/>}
       /> */}
{/* 
      <div className="flex justify-center pt-50 space-x-10">
      <Navigate variant="single" icon={<HomeIcon/>} disabled></Navigate>
       <Navigate variant="group" groupItems={groupItems}  disabled/>
      </div> */}

      <div className=" flex flex-col space-y-10 px-50 pt-50">
      <NavigateRail variant="single" icon={<VerifIcon/>}> Verification</NavigateRail>
  <NavigateRail variant="group" dropdownItems={dropdownItems} icon={<DropArrowIcon/>}> </NavigateRail>
  </div>

      {/*       
     <LargeTab variant="group" labels={labels}   />
<LargeTab variant="single" >Advisorr</LargeTab> */}

      {/*       
     <div className="flex flex-col justify-center px-50 pt-50 space-y-30">

      <SmallTab variant="group" items={items} status="second">  </SmallTab> 
      
      <SmallTab variant="line"  iconLeft={<TabsIcon1/>} iconRight={<TabsIcon2/>}> </SmallTab>


</div> */}

      {/* 
      <Checkbox variant="CheckSolid" status="number"> 1</Checkbox>

      <Checkbox variant="CheckSolid" status="check"></Checkbox>

      <Checkbox variant="CheckSolid" status="empty"> </Checkbox>
      <Checkbox variant="CheckGroup" status="1st"> </Checkbox>
 */}

      {/*       
      <RadioButton variant="single">  </RadioButton>
 <RadioButton variant="group"> Text</RadioButton> */}

      {/* <OtherComponent leftIcon={<UploadIcon/>} variant="drop" ></OtherComponent>
      <OtherComponent variant="toglle" ></OtherComponent> */}
    </div>
  );
}
