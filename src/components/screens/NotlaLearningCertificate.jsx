import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import bg from "../../assets/images/artboard.png";
import { axiosConfig } from "../../axiosConfig";
import { notification } from "antd";
import { formatDate } from "../utils/helperFucntions";

function NotlaLearningCertificate() {
	const [certificateData, setCertificateData] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const fetchCertificateData = () => {
		axiosConfig
			.get(`/certificate`)
			.then((res) => {
				setIsLoading(false);
				if (res.status === 200) {
					setCertificateData(res.data[0]);
					notification.success({
						message: "Data Fetched successfully",
					});
				} else {
					notification.error({
						message: "Data Fetching Failed",
					});
				}
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
				notification.error({
					message: err.message,
				});
			});
	};

	useEffect(() => {
		fetchCertificateData();
	}, []);

	console.log(certificateData);
	return (
		<Container>
			<Certificate>
				<BgImage>
					<img src={bg} alt="Background image" />
				</BgImage>
				<ContentSection>
					<Name>{certificateData.name}</Name>
					<CertificateFor>
						For the Outstanding completion of (
						{certificateData.course} ) on the
					</CertificateFor>
					<PlatformName>NOLTE FZE LEARNING PLATFORM</PlatformName>
					<OfficialsSection>
						<Officials>
							<OfficialName>
								{certificateData.manager}
							</OfficialName>
							<Designation>Traning Manger</Designation>
							<SignArea></SignArea>
							<Date>
								Dubai, {formatDate(certificateData.createdAt)}
							</Date>
						</Officials>{" "}
						<Officials>
							<OfficialName>{certificateData.md}</OfficialName>
							<Designation>Managing Director</Designation>
							<SignArea></SignArea>
							<Date>
								Dubai, {formatDate(certificateData.createdAt)}
							</Date>
						</Officials>
					</OfficialsSection>
				</ContentSection>
			</Certificate>
		</Container>
	);
}

export default NotlaLearningCertificate;
const Container = styled.div`
	display: flex;
	justify-content: center;
	min-height: 100vh;
	align-items: center;
`;
const Certificate = styled.div`
	max-width: 800px;
	position: relative;
`;
const BgImage = styled.div`
	img {
		display: block;
		width: 100%;
	}
`;
const ContentSection = styled.div`
	position: absolute;
	padding: 20px 40px;
	background-color: #ffffff;
	/* opacity: 0.5; */
	width: calc(100% - 40px);
	top: 45%;
	left: 0;
	margin: 20px;
	height: 43%;
	@media all and (max-width: 640px) {
		padding: 10px 30px;
		height: 42%;
	}
	@media all and (max-width: 480px) {
		margin-top: 0;
	}
`;
const Name = styled.div`
	text-align: center;
	margin: 0 auto;
	font-family: "Tangerine", cursive;
	font-size: 75px;
	font-weight: 700;
	@media all and (max-width: 640px) {
		font-size: 55px;
	}
	@media all and (max-width: 480px) {
		font-size: 35px;
	}
`;
const CertificateFor = styled.p`
	text-align: center;
	font-size: 18px;
	margin-top: 20px;
	@media all and (max-width: 640px) {
		font-size: 13px;
		margin-top: 10px;
	}
	@media all and (max-width: 480px) {
		font-size: 10px;
	}
`;
const PlatformName = styled.h2`
	font-size: 20px;
	text-align: center;
	margin-top: 10px;
	@media all and (max-width: 640px) {
		font-size: 15px;
	}
	@media all and (max-width: 480px) {
		font-size: 12px;
	}
`;
const OfficialsSection = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 15%;
	@media all and (max-width: 640px) {
		margin-top: 10%;
	}
	@media all and (max-width: 480px) {
		margin-top: 20px;
	}
`;
const Officials = styled.div``;

const OfficialName = styled.p`
	font-size: 18px;
	font-weight: 600;
	@media all and (max-width: 640px) {
		font-size: 14px;
	}
	@media all and (max-width: 480px) {
		font-size: 12px;
	}
`;
const Designation = styled.p`
	font-size: 14px;
	@media all and (max-width: 640px) {
		font-size: 12px;
	}
	@media all and (max-width: 480px) {
		font-size: 10px;
	}
`;
const SignArea = styled.span`
	display: block;
	margin-top: 40px;
	border-bottom: 2px solid #000;
	@media all and (max-width: 640px) {
		margin-top: 20px;
	}
`;
const Date = styled.p`
	font-size: 14px;
	margin-top: 10px;
	@media all and (max-width: 640px) {
		font-size: 12px;
	}
	@media all and (max-width: 480px) {
		font-size: 10px;
	}
`;
