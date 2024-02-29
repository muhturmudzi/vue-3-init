import { describe, it, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputDropDown from '@/components/form/InputDropDown.vue'

const listData = [
  {
      "id": 1,
      "name": "PKB",
      "full_name": "Partai Kebangkitan Bangsa",
  },
  {
      "id": 2,
      "name": "Gerindra",
      "full_name": "Partai Gerakan Indonesia Raya",
  },
  {
      "id": 3,
      "name": "PDI Perjuangan",
      "full_name": "Partai Demokrasi Indonesia Perjuangan",
  },
  {
      "id": 4,
      "name": "Golkar",
      "full_name": "Partai Golongan Karya",
  },
  {
      "id": 5,
      "name": "NasDem",
      "full_name": "Partai NasDem",
  },
  {
      "id": 6,
      "name": "Partai Buruh",
      "full_name": "Partai Buruh",
  },
  {
      "id": 7,
      "name": "Gelora",
      "full_name": "Partai Gelombang Rakyat Indonesia",
  },
  {
      "id": 8,
      "name": "PKS",
      "full_name": "Partai Keadilan Sejahtera",
  },
  {
      "id": 9,
      "name": "PKN",
      "full_name": "Partai Kebangkitan Nusantara",
  },
  {
      "id": 10,
      "name": "Hanura",
      "full_name": "Partai Hati Nurani Rakyat",
  },
  {
      "id": 11,
      "name": "Garuda",
      "full_name": "Partai Garda Perubahan Indonesia",
  },
  {
      "id": 12,
      "name": "PAN",
      "full_name": "Partai Amanat Nasional",
  },
  {
      "id": 13,
      "name": "PBB",
      "full_name": "Partai Bulan Bintang",
  },
  {
      "id": 14,
      "name": "Partai Demokrat",
      "full_name": "Partai Demokrat",
  },
  {
      "id": 15,
      "name": "PSI",
      "full_name": "Partai Solidaritas Indonesia",
  },
  {
      "id": 16,
      "name": "Perindo",
      "full_name": "Partai Persatuan Indonesia",
  },
  {
      "id": 17,
      "name": "PPP",
      "full_name": "Partai Persatuan Pembangunan",
  },
  {
      "id": 24,
      "name": "Partai Ummat",
      "full_name": "Partai Ummat",
  }
]

const mountDropdown = (props) => {
  return mount(InputDropDown, {
    props: {
      list: listData,
      label: 'name',
      reduce: 'id',
      ...props
    }
  })
}

describe('Dropdown Component', () => {
  it('it will render component', async () => {
    const wrapper = mountDropdown()
    expect(wrapper.exists()).toBe(true)
  })
  
  // it('render props placholder', async () => {
  //   const wrapper = mountDropdown({ placeholder: 'Search or select Partai' })
  //   expect(InputDropDown.props.placeholder).toContain('Search or select Partai')
  // })

  // test('check data exist', async () => {
  //   const wrapper = mountDropdown({ modelValue: 50 })
  //   expect(wrapper.html()).toContain('Data not found')
  // })

  test('show list dropdown', async () => {
    const wrapper = mountDropdown()
    await wrapper.find('input').trigger('click')
    expect(wrapper.find('ul').exists()).toBe(true)
  })
})

