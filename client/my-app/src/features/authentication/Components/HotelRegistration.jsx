import React, { useEffect } from 'react'
import { Formik } from 'formik'
import { useRef, useState } from "react"
import { useRegisterHotelMutation } from '@/utils/ReduxStore/Slices/registerApiSlice'
import { useSelector } from "react-redux";
import { setCredentials } from '@/utils/ReduxStore/Slices/authSlice';
import * as Yup from "yup";
import { Button, Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';





function HotelRegistration() {
  const Navigate= useNavigate()

  const [registerHotel, { isError, isLoading, isSuccess }] = useRegisterHotelMutation()

  const accessToken = useSelector(state => state.authSlice.user);
  const id=accessToken.user._id
  console.log(id,"idddddd")
  





  async function _onSave(values) {
    try {
      const { hotelName, description, address, features, rate, numberOfRooms, images, state, postcode, city } = values;
      
      const add=`${address},${city},${state},${postcode}`

      console.log(id)
      const formData = new FormData();
      formData.append('hotelName', hotelName);
      formData.append('description', description);
      formData.append('address', add);
      formData.append('features', features);
      formData.append('rate', rate);
      formData.append('numberOfRooms', numberOfRooms);
      formData.append('owner_id',id);
      
      //formData.append('state', state);
      //formData.append('postcode', postcode);
      //formData.append('city', city);


      for (var i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      console.log(formData)
      const response = await registerHotel(formData)

         
      console.log(response);
      Navigate("/host/listings")
    } catch (error) {
      console.log(error);
    }

  }

  return (

    <div>
      <div className="flex items-center justify-center p-12">
        {/* Author: FormBold Team */}
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <Formik
            initialValues={{ hotelName: '', description: '', address: "", features: "", rate: "", numberOfRooms: "", images: "", city: "", state: "", postcode: "" }}

               validationSchema={Yup.object().shape({
                hotelName: Yup.string()
                    .min(6, "Hotel name should be at least 6 characters")
                    .required("Hotel name is required"),
                address: Yup.string().min(4, "Location is required").required("Location is required"),
                description: Yup.string()
                    .min(30, "Description should be at least 30 characters")
                    .max(1000, "Description should be at most 1000 characters")
                    .required("Description is required"),
                rate: Yup.number("Rate should be a number"),
                features: Yup.string()
                    .min(30, "Features should be at least 30 characters")
                    .max(1000, "Features should be at most 1000 characters")
                    .required("Features are required"),
                numberOfRooms: Yup.number("Number of rooms should be a number"),
                images: Yup.mixed(),
            })}




            onSubmit={(values) => { console.log(_onSave(values), "hybh") }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              setFieldValue,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (



              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="hotelName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    properties Name
                  </label>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.hotelName}
                    error={errors.hotelName && touched.hotelName && errors.hotelName}
                    success={!errors.hotelName && touched.hotelName ? true : false}
                    type={"text-area"}
                    name="hotelName"
                    label={!errors.hotelName ? "hotelName" : errors.hotelName}
                    id="name"

                    placeholder="properties name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="description"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Description
                  </label>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    error={errors.description && touched.description && errors.description}
                    success={!errors.description && touched.description ? true : false}
                    type={"text-area"}
                    name="description"
                    label={!errors.description ? "description" : errors.description}
                    id="name"
                    placeholder="description"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="features"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Features
                  </label>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.features}
                    error={errors.features && touched.features && errors.features}
                    success={!errors.features && touched.features ? true : false}
                    type={"text-area"}
                    name="features"
                    label={!errors.features ? "features" : errors.features}
                    id="name"
                    placeholder="features"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="Rate"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Rate
                      </label>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.rate}
                        error={errors.rate && touched.rate && errors.rate}
                        success={!errors.rate && touched.rate ? true : false}
                        type={"number"}
                        name="rate"
                        label={!errors.rate ? "rate" : errors.rate}
                        id="rate"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        number of Rooms
                      </label>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.numberOfRooms}
                        error={errors.numberOfRooms && touched.numberOfRooms && errors.numberOfRooms}
                        success={!errors.numberOfRooms && touched.numberOfRooms ? true : false}
                        type={"number"}
                        name="numberOfRooms"
                        label={!errors.numberOfRooms ? "numberOfRooms" : errors.numberOfRooms}

                        id="number"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="images"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      images
                    </label>

                    <Input
                      onChange={(event) => {
                        setFieldValue("images", event.currentTarget.files);
                      }}
                      error={errors.images && touched.images && errors.images}
                      success={!errors.images && touched.images ? true : false}
                      type={"file"}
                      name="images"
                      label={!errors.images ? "images" : errors.images}
                      multiple
                      accept='image/*'
                    />

                  </div>
                </div>

                <div className="mb-5 pt-3">
                  <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                    Address Details
                  </label>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.address}
                          error={errors.address && touched.address && errors.address}
                          success={!errors.address && touched.address ? true : false}
                          type={"text-area"}
                          name="address"
                          label={!errors.address ? "address" : errors.address}
                          id="address"
                          placeholder="Enter address"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <Input

                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.city}
                          error={errors.city && touched.city && errors.city}
                          success={!errors.city && touched.city ? true : false}
                          type={"text-area"}
                          name="city"
                          label={!errors.city ? "area" : errors.city}

                          id="city"
                          placeholder="Enter city"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <Input

                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.state}
                          error={errors.state && touched.state && errors.state}
                          success={!errors.state && touched.state ? true : false}
                          type={"text-area"}
                          name="state"
                          label={!errors.state ? "state" : errors.state}

                          id="state"
                          placeholder="Enter state"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <Input

                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.postcode}
                          error={errors.postcode && touched.postcode && errors.postcode}
                          success={!errors.postcode && touched.postcode ? true : false}
                          type={"number"}
                          name="postcode"
                          label={!errors["postcode"] ? "postcode" : errors["postcode"]}
                          id="postcode"
                          placeholder="Post Code"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Button type="submit" className="hover:shadow-form w-full rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Register Room
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
















    </div>
  )
}

export default HotelRegistration
