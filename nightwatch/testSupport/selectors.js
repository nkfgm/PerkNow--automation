module.exports = {
    User:{
        loginScreen:{
            emailField:'input[id=email]',
            passwordField:'input[id=pass]',
            signInButton:'button[type=button]',
            createAccount:'a[id=signButton]',
        },
        createAccountScreen:{
            yesButton:{
                tag: 'button',
                text: 'Yes'
            },
            codeButton:{
                tag: 'button',
                text: 'No, but I have a code',
            },
            codeEntry:{
                code1:'input[ng-model="user.company_code1"]',
                code2:'input[ng-model="user.company_code2"]',            
                code3:'input[ng-model="user.company_code3"]',
                code4:'input[ng-model="user.company_code4"]',
                personalEmail:'input[ng-model="user.email"]',
                nextButton:'div[ng-click="submitCompanyCode()"]'
            },
            workEmailScreen:{
                email:'input[id=sign_email]',
                nextButton:'div[ng-click="nextSignupEmail()"]'
            },
            nameScreen:{
                firstNameLine:'input[id=first_name]',
                lastNameLine:'input[id=last_name]',
                passwordLine:'input[id=sign_pass]',
                nextButton:'div[ng-click="nextSignupInfo()"]',
                showPassword:'input[type=checkbox]'
            },
            zipCodeScreen:{
                zipCode:'input[id=zip]',
                getPerks:'button[ng-click="signup()"]'
            },
        },
        menuBar:{
            backButton:'button[ng-click="$ionicGoBack()"]',
            menuButton:'button[class="button-icon button button-white ion-navicon:nth-of-type(2)"]',
            requestPerk:'a[ng-href="mailto:PerkNowinfo@gmail.com?subject=Request%20a%20perk"]',
            referVendor:'a[ng-href="mailto:Perknowinfo@gmail.com?subject=Refer%20a%20vendor"]',
            contactSupport:'a[ng-href="mailto:Perknowinfo@gmail.com?subject=Help"]',
            privacyPolicy:{
                tag:'a',
                text:'Privacy Policy',
                policy:'div[id=privacy-container]'
            },
            termsConditions:{
                tag:'a',
                text:'Terms and Conditions of Use',
                terms:'div[id=tos-container]'
            },
            logout:{
                tag:'a',
                text:'Logout'
            }
        },
        dealsPage:{
            featuredDeals:'h4[class="featured-footer-text ng-binding"]',
            serviceDeals:'div[class="category-icon service"]',
            foodDeals:'div[class="category-icon food"]',
            conciergeDeals:'div[class="category-icon concierge"]',
            funDeals:'div[class="category-icon fun"]',
            dealsHome:'div[class="scroll"]'
        },
        serviceDeals:{
            dealsList:'div[class="vendors-list shadow-spaced"]'
        },
        foodDeals:{
            dealsList:'div[class="vendors-list shadow-spaced"]'
        },
        conciergeDeals:{
            dealsList:'div[class="vendors-list shadow-spaced"]'
        },
        funDeals:{
            dealsList:'div[class="vendors-list shadow-spaced"]',
            fun1Deal:{
                tag:'h4',
                text:'Fun 1'
            },
            vendorInfoFun1:'div[class="deal-vendor"]',
            dealInfo:'div[ng-if="deals.length > 0"]',
            gameboyDeal:{
                tag:'div',
                text:'Gameboy'
            },
            gameboyDealDescription:'h4[id="modal-description"]'
        },
        dealRedeem:{
            dealInfo:{
                location:'a[class="center qa__address ng-binding"]',
                hours:'div[class="vendor-hours"]',
                website:'a[class="center qa__url"]',
                phone:'a[class="center qa__phone"]'
            },
            dealRedeemBox:'ion-content[id="redeem"]',
            redeemButton:{
                tag:'button',
                text:'REDEEM'
            },
            redeemedBox:'ion-modal-view[id="redeem-modal"]',
            redeemedButton:'button[ng-click="closeRedeemed()"]',
            backButton:{
                tag:'button',
                text:'Back'
            }
        },
    },
    Admin:{
        menuBar:{
            menuButton:{
                tag:'button',
                text:'...'
            },
            homeButton:'ion-item[ng-click="home()"]',
            logoutButton:'ion-item[ng-click="logout()"]'
        },
        homePage:{
            viewDeals:'button[ng-click="viewDeals()"]',
            viewVendors:'button[ng-click="viewVendors()"]',
            viewCompanies:'button[ng-click="viewCompanies()"]',
            viewTransactions:'button[ng-click="viewTransactions()"]',
            viewUsers:'button[ng-click="viewUsers()"]'
        },
        viewDeals:{
            editDealHeader:'h3[ng-if="!showAddDeal"]',
            dealList:'tr[ng-click="showDeal(deal.id)"]',
            dealsHeader:'div[class="av_header_container"]',
            addDealButton:'button[ng-click="addDeal()"]',
            newDealButton:{
                tag:'button',
                text:'New Deal'
            },
            newDeal:'tr[name="13 : `50% off`"]',
            dealToEdit:'tr[name="7 : `7 50% off`"]',
            dealToDelete:'tr[name="13 : `50% off`"]',
            completeDealList:'tr[name="5 : `50% off`"]',
            editedDeal:'tr[name="2 : `30% off`"]'
        },
        dealEdit:{
            descriptionField:'input[ng-model="updatedDeal.description"]',
            nameField:'input[ng-model="updatedDeal.name"]',
            updateDealButton:'button[ng-click="updateDeal()"]',
            deleteDeal:'button[ng-click="deleteDeal()"]',
            backButton:{
                tag:'button',
                text:'Deals'
            }

        },
        newDeal:{
            addDealButton:'button[ng-click="addDeal()"]',
            seeAllDeals:{
                tag:'button',
                text:'See All Deals'
            },
            dealName:'input[ng-model="newDeal.name"]',
            vendorID:'input[ng-model="newDeal.vendor_id"]',
            dealDescription:'input[ng-model="newDeal.description"]',
            dropDown:'select[ng-model="newDeal.featured"]',
            featuredSelectors:{
                yes:'option[value="true"]',
                no:'option[value="false"]'
            }
        },
        vendorsList:{
            vendorHeader:'div[class="av_header_container"]',
            newVendorButton:{
                tag:'button',
                text:'New Vendor'
            },
            editVendorHeader:'h3[ng-if="!showAddVendor"]',
            vendorToEdit:{
                tag:'td',
                text:'Services 1'
            },
            deleteVendor:{
                tag:'td',
                text:'Wizard dresden'
            }
        },
        editVendor:{
            updateVendorButton:'button[ng-click="updateVendor()"]',
            deleteVendorButton:'button[ng-click="deleteVendor()"]',
            backButton:{
                tag:'button',
                text:'Vendors'
            }
        },
        newVendor:{
            addVendorButton:'button[ng-click="addVendor()"]',
            vendorName:'input[ng-model="newVendor.name"]',
            vendorAddress:'input[ng-model="newVendor.address"]',
            vendorAddress2:'input[ng-model="newVendor.addressLine2"]',
            vendorCity:'input[ng-model="newVendor.city"]',
            vendorState:'input[ng-model="newVendor.state"]',
            vendorZip:'input[ng-model="newVendor.postal_code"]',
            vendorPhone:'input[ng-model="newVendor.phone"]',
            vendorEmail:'input[ng-model="newVendor.email"]',
            categoryDropDown:'select[ng-model="newVendor.category"]',
            categoryOptions:{
                concierge:'option[value="concierge"]',
                food:'option[value="food"]',
                fun:'option[value="fun"]',
                service:'option[value="service"]'
            },
            pictureURL:'input[ng-model="newVendor.picture_url"]',
            bookingURL:'input[ng-model="newVendor.booking_url"]',
            temporaryDropDown:'select[ng-model="newVendor.temporary"]',
            temporaryOptions:{ 
                yes:'option[value="true"]',
                no:'option[value="false"]',
            },
            weekdayHours:'input[ng-model="newVendor.weekday_hours"]',
            saturdayHours:'input[ng-model="newVendor.saturday_hours"]',
            sundayHours:'input[ng-model="newVendor.sunday_hours"]',
            companyRestrictions:'input[type=checkbox]',
            facebookCheckBox:'input[class="restrict_box ng-valid ng-dirty ng-valid-parse ng-not-empty ng-touched"]',
        },
        companiesList:{
            companyHeader:'div[class="av_header_container"]',
            newCompanyButton:{
                tag:'button',
                text:'New Company'
            },
            editCompanyHeader:'h3[ng-if="!showAddCompany"]',
            companyToEdit:{
                tag:'td',
                text:'Tesla'
            },
            companyToDelete:{
                tag:'td',
                text:'Naughty Dog'
            }
        },
        editCompany:{
            updateCompanyButton:'button[ng-click="updateCompany()"]',
            deleteCompanyButton:'button[ng-click="deleteCompany()"]',
            backButton:{
                tag:'button',
                text:'Companies'
            }
        },
        newCompany:{
            addCompanyButton:'button[ng-click="addCompany()"]',
            companyName:'input[ng-model="newCompany.name"]',
            companyAddress:'input[ng-model="newCompany.address"]',
            companyAddress2:'input[ng-model="newCompany.addressline2"]',
            companyCity:'input[ng-model="newCompany.city"]',
            companyState:'input[ng-model="newCompany.state"]',
            companyZip:'input[ng-model="newCompany.postal_code"]',
            companyDomain:'input[ng-model="newCompany.domain"]',
            companyColor:'input[ng-model="newCompany.color"]',
            companyLogoUrl:'input[ng-model="newCompany.logo"]',
            companyCode:'input[ng-model="newCompany.companycode"]',
        },
        viewTransactions:{
            transactionsList:'table[style="-webkit-user-select: auto"]'
        },
        viewUsers:{
            usersList:'table[style="user-select: auto;"]'
        },

    }
}
