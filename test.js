

// const arr = [ 1, 2, 3, 4, 5 ]

// const arr2 = arr.reduce((acc, item) =>
// {
//     return acc + item
// }, 0)

// console.log(arr2)



const adminPaths2 = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: " <AdminDashboard />",
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: "<CreateAdmin />",
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: " <CreateFaculty />",
            },
            {
                name: "Create Student",
                path: "create-student",
                element: " <CreateStudent />",
            },
        ],
    },
];


// const newArr = adminPaths2.reduce((acc, item) =>
// {
//     if (item.path && item.element)
//     {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }
//     if (item.children)
//     {
//         item.children.forEach(child =>
//         {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc
// }, [])


// console.log('final result', newArr)



const newArr = adminPaths2.reduce((acc, item) =>
{
    if (item.path && item.name)
    {
        acc.push({
            key: item.name,
            label: item.path
        })
    }
    if (item.children)
    {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map(child => ({ key: child.name, label: child.path }))
        })
    }
    return acc
}, [])


console.log('final result', newArr)