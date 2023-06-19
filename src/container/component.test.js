
import { render, screen, fireEvent, waitFor, act, queryAllByTestId } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'
import { BrowserRouter } from 'react-router-dom';
import { ProductComponent } from './productComponent';
import '@testing-library/jest-dom'


    const storeRender = () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ProductComponent />
                </BrowserRouter>
            </Provider>
        )
    }

    // beforeEach(()=>{
    //       test('view button progress testing', () => {
     
    //         // storeRender();
    //         fireEvent.click(screen.getByTitle("view-btn"));
    //         expect(screen.getByTitle('view-btn')).toBeTruthy();
    //     })
    // })
   



describe("Overall testing for Component Availability", function () {
    test('Total DIV test', () => {
        storeRender();
        const linkElement = screen.getByTestId("all");
        expect(linkElement).toBeTruthy();
        screen.debug(linkElement)
    })
    test('component', () => {
        storeRender();
        expect(screen.getAllByTestId("component")).toBeTruthy();
    })
    test('imageComponent', () => {
        storeRender();
        expect(screen.getAllByTestId("imageComponent")).toBeTruthy();
    })
    test('listComponent', () => {
        storeRender();
        expect(screen.getAllByTestId("listComponent")).toBeTruthy();
    })
    test('3Components', () => {
        storeRender();
        expect(screen.getAllByTestId("3Components")).toBeTruthy();
    })
    //DELETE-BUTTON
    test('Delete Component', () => {
        beforeEach = () => {
        storeRender();
        expect(screen.getAllByTestId("dlt-icon")).toBeTruthy();
        }
    })
    test('Delete Component', () => {
        beforeEach = () => {
        storeRender();
        fireEvent.click(screen.getByTestId("dlt-icon"))
        expect(screen.getAllByTestId("dlt-icon")).toBeTruthy();
        }
    })
    //POPUP
    test('popup Component', () => {
        beforeEach = () => {
        storeRender();
        fireEvent.click(screen.getByTestId("dlt-icon"))
        expect(screen.getAllByTestId("pop-form")).toBeTruthy();
        }
    })
    test('popup text Component', () => {
        beforeEach = () => {
        storeRender();
        fireEvent.click(screen.getByTestId("dlt-icon"))
        expect(screen.getAllByTestId("pop-text")).toBeTruthy();
        }
    })

    test('popup button Component', () => {
        beforeEach = () => {
        storeRender();
        fireEvent.click(screen.getByTestId("dlt-icon"))
        expect(screen.getAllByTestId("pop-yes")).toBeTruthy();
        expect(screen.getAllByTestId("pop-no")).toBeTruthy();
        }
    })

    test('popup button process Component', () => {
        beforeEach = () => {
        storeRender();
        // fireEvent.click(screen.getByTestId("dlt-icon"))
        expect(screen.getAllByTestId("pop-yes")).toBeTruthy();
        fireEvent.click(screen.getByTestId('pop-yes'))
        expect(screen.getAllByTestId("pop-no")).toBeTruthy();
        fireEvent.click(screen.getByTestId('pop-no'))
        }
    })


    //VIEW BUTTON
    test('viewComponent', () => {
        storeRender();
        expect(screen.getAllByTestId("viewComponent")).toBeTruthy();
    })
    test('view button progress testing', () => {
        beforeEach = () => {
            storeRender();
            fireEvent.click(screen.getByTitle("view-btn"));
            expect(screen.getByTitle('view-btn')).toBeTruthy();
        }
    })

    //EDIT BUTTON
    test('editComponent', () => {
        storeRender();
        expect(screen.getAllByTestId("editComponent")).toBeTruthy();
    })
    test('proTitle', () => {
        storeRender();
        expect(screen.getAllByTestId("proTitle")).toBeTruthy();
    })
    // test('Image Details', () => {
    //     beforeEach=()=>{
    //     storeRender();
    //     fireEvent.click(screen.getByTitle("view-btn"));
    //     expect(screen.getAllByTestId("imageDetails")).toBeTruthy();
    //     expect(screen.getAllByTestId("detailsProName")).toBeTruthy();
    //     expect(screen.getAllByTestId("detailsProId")).toBeTruthy();
    //     expect(screen.getByTestId("detailsProSize")).toBeTruty();

    //     }
    // })
    // test('Product Name Details', () => {

    //     storeRender();
    //     fireEvent.click(screen.getByTitle("view-btn"));
    //   

    // })
    // test('Product Name Details', () => {

    //     storeRender();
    //     fireEvent.click(screen.getByTitle("view-btn"));
    //    

    // })
    // test('Product Name Details', () => {

    //     storeRender();
    //     // fireEvent.click(screen.getByTitle("view-btn"));
    //    
    // })

})

// beforeEach(() => {
//     storeRender();
//     });
// describe(("For view and Delete the components")=function(){
//     test('Delete Component', () => {
//         storeRender();
//         expect(screen.getAllByTestId("dlt-icon")).toBeTruthy();
        
//     })

// })    