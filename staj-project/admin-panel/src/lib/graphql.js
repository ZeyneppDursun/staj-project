import { gql } from '@apollo/client'

export const GET_SECTIONS = gql`
  query GetSections {
    sections(order_by: { id: asc }) {
      id
      name
      title
      subtitle
      image
      button
    }
  }
`

export const GET_SECTION_BY_ID = gql`
  query GetSectionById($id: uuid!) {
    sections_by_pk(id: $id) {
      id
      name
      title
      subtitle
      image
      button
    }
  }
`

export const UPDATE_SECTION = gql`
  mutation UpdateSection(
    $id: uuid!
    $name: String
    $title: String
    $subtitle: String
    $image: String
    $button: String
  ) {
    update_sections_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        title: $title
        subtitle: $subtitle
        image: $image
        button: $button
      }
    ) {
      id
    }
  }
`

// UUID için - ID'yi göndermiyoruz, Hasura otomatik oluşturacak
export const ADD_SECTION = gql`
  mutation AddSection(
    $name: String!
    $title: String
    $subtitle: String
    $image: String
    $button: String
  ) {
    insert_sections_one(
      object: {
        name: $name
        title: $title
        subtitle: $subtitle
        image: $image
        button: $button
      }
    ) {
      id
      name
      title
    }
  }
`

export const GET_CARDS = gql`
  query GetCards {
    cards(order_by: { id: asc }) {
      id
      title
      description
      image
      category
    }
  }
`
