import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Transition, animated} from 'react-spring/renderprops'
import NavigationMenuItems from './NavigationMenuItems'
import { useState } from 'react'

function Navigation(props){
   const [showMenu,setshowMenu] = useState(false);
    openMenu = () => {
   setshowMenu(true);
    }
    
    closeMenu = () => {
    setshowMenu(false);    
    }

        return (
            <div>
                <span className="text-2xl">
                    <FontAwesomeIcon 
                        icon={faBars} 
                        onClick={this.openMenu}
                    />
                </span>

                <Transition
                    native
                    items={this.state.showMenu}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                >
                    { show =>
                        show && (props =>
                            <animated.div
                                style={props}
                                className="bg-black-o-500 fixed w-full h-full top-0 left-0 z-50"
                                onClick={this.closeMenu}
                            />
                        )
                    }
                </Transition>

                <Transition
                    items={this.state.showMenu}
                    from={{ opacity: 0, transform: 'translateX(-100%)' }}
                    enter={{ opacity: 1, transform: 'translateX(0%)' }}
                    leave={{ opacity: 0, transform: 'translateX(-100%)' }}
                >
                    {show =>
                        show && (props => 
                            <animated.nav 
                                style={props} 
                                className="fixed bg-white p-3 w-4/5 md:w-80 h-full top-0 left-0 shadow-lg z-50"
                            >
                                <NavigationMenuItems close={this.closeMenu} />
                            </animated.nav>
                        )
                    }
                </Transition>
            </div>
        )
    
}

export default Navigation;