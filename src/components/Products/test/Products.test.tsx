import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react'
import { Products } from ".."

const renderComponent = (component: React.ReactNode) => {
  return render(
    component
  )
}

beforeEach(() => {

  Object.defineProperty(window, 'location', {
    value: {
      href: '',
      search: '',
    },
    writable: true,
  })

  vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(50)
  vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(50)

  vi.mock('../../stores/cartStore', () => ({
    addToCart: vi.fn(),
    removeProductFromCart: vi.fn(),
  }))

  vi.mock('../../stores/favoriteStore', () => ({
    addProductToFavorites: vi.fn(),
    removeProductFromFavorites: vi.fn(),
  }))

  vi.mock('../../utils/notification', () => ({
    notification: vi.fn(),
  }))
})

afterEach(() => {
  vi.clearAllMocks();
});


describe('Products Component', () => {
  test('should return the correct cart items', async () => {
    renderComponent(<Products />)
    const productItemOne = await screen.findByText('Smartphone Samsung Galaxy A05 128GB 4G Wi-Fi Tela 6.7" Dual Chip 4GB RAM Câmera Dupla + Selfie 8MP - Prata');
    const productItemTwo = await screen.findByText("Monitor LED 27' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50");
    const productItemThree = await screen.findByText('Notebook Dell Inspiron I15-I120K-M25P 15.6\" Full HD 12ª Geração Intel Core i5 8GB 512GB SSD Windows 11 Preto');

    const priceOriginal = await screen.findByText('R$ 749,00');

    const pricePromotional = await screen.findByText('R$ 674,10');

    expect(productItemOne).toBeInTheDocument()
    expect(productItemTwo).toBeInTheDocument()
    expect(productItemThree).toBeInTheDocument()

    expect(pricePromotional).toBeInTheDocument()
    expect(priceOriginal).toBeInTheDocument()

  })

  test('should call addToCart when add button is clicked', async () => {
    renderComponent(<Products />);
    const product = await screen.findByText('Smartphone Samsung Galaxy A05 128GB 4G Wi-Fi Tela 6.7" Dual Chip 4GB RAM Câmera Dupla + Selfie 8MP - Prata');
    const addButtons = await screen.findAllByRole('button', { name: /Adicionar/i });

    expect(product).toBeInTheDocument()
    expect(addButtons.length).toBeGreaterThan(0);
    fireEvent.click(addButtons[0]);

    expect(addButtons[0]).toHaveTextContent('Adicionado');
    console.log(document.body.innerHTML)


  });
  test('should call addProductToFavorites when favorite button is clicked', async () => {
    renderComponent(<Products />);
  
    const product = await screen.findByText('Smartphone Samsung Galaxy A05 128GB 4G Wi-Fi Tela 6.7" Dual Chip 4GB RAM Câmera Dupla + Selfie 8MP - Prata');
    expect(product).toBeInTheDocument()
  
    const favoriteButton = await screen.findAllByTestId('favorite-product-add');
    expect(favoriteButton.length).toBeGreaterThan(0);
    fireEvent.click(favoriteButton[0]);

    const removeFavoriteButton = await screen.findByTestId('favorite-product-remove');
    expect(removeFavoriteButton).toBeInTheDocument();
  });

})