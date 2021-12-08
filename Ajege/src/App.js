import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, personCircle, map, informationCircle, person, cart, heart, list} from 'ionicons/icons';
import Home from './pages/Home';
import { ProductStore } from './data/ProductStore';
import { FavouritesStore } from './data/FavouritesStore';
import { CartStore } from './data/CartStore';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useEffect } from 'react';
import { fetchData } from './data/fetcher';
import CategoryProducts from './pages/CategoryProducts';
import Product from './pages/Product';
import FavouriteProducts from './pages/FavouriteProducts';
import CartProducts from './pages/CartProducts';

const App = () => {
	const products = ProductStore.useState(s => s.products);
  	const favourites = FavouritesStore.useState(s => s.product_ids);
	const shopCart = CartStore.useState(s => s.product_ids);

	useEffect(() => {

		fetchData();
	}, []);

	return (
		<IonApp>
			<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route path="/" exact={true}>
						<Redirect to="/home" />
					</Route>
					<Route path="/home" exact={true}>
						<Home />
					</Route>

					<Route path="/favourites" exact>
						<FavouriteProducts />
					</Route>

					<Route path="/cart" exact>
						<CartProducts />
					</Route>

					<Route path="/category/:slug" exact>
						<CategoryProducts />
					</Route>

					<Route path="/category/:slug/:id" exact>
						<Product />
					</Route>
				</IonRouterOutlet>
			
					<IonTabBar slot="bottom">
						<IonTabButton href="/home" tab="schedule">
							<IonIcon icon={list} />
							<IonLabel>Categories</IonLabel>
						</IonTabButton>

						<IonTabButton href="/favourites" tab="speakers">
							<IonIcon icon={heart} />
							<IonLabel>Favourites</IonLabel>
							<IonBadge color="danger">
                            { favourites.length }
                        </IonBadge>
						</IonTabButton>

						<IonTabButton href="/cart" tab="map">
							<IonIcon icon={cart} />
							<IonLabel>Cart</IonLabel>
							<IonBadge color="danger">
                            { shopCart.length }
                        </IonBadge>
						</IonTabButton>

						<IonTabButton tab="about">
							<IonIcon icon={person} />
							<IonLabel>Profile</IonLabel>
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
			</IonReactRouter>
		</IonApp>
	);
}

export default App;
