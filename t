[1mdiff --git a/client/src/components/view/PeopleList.js b/client/src/components/view/PeopleList.js[m
[1mindex 5628fee..407f3c7 100644[m
[1m--- a/client/src/components/view/PeopleList.js[m
[1m+++ b/client/src/components/view/PeopleList.js[m
[36m@@ -49,21 +49,8 @@[m [mconst useStyles = makeStyles(theme => ({[m
 const People = () => {[m
   const classes = useStyles();[m
 [m
[31m-  const [open, setOpen] = React.useState(false);[m
[31m-[m
[31m-  const [openItem, setOpenItem] = useState(0);[m
[31m-[m
[31m-  const handleClick = () => {[m
[31m-    setOpen(!open);[m
[31m-  };[m
[31m-[m
[31m-  const handleItemClick = id => {[m
[31m-    console.log(id);[m
[31m-    setOpenItem(1);[m
[31m-  };[m
[31m-[m
   const [{ data, loading, error, response }, refetch] = useAxios([m
[31m-    'http://localhost:5001/userlist',[m
[32m+[m[32m    'http://localhost:5001/peoplelist',[m
   );[m
 [m
   const createPanelItem = item => {[m
